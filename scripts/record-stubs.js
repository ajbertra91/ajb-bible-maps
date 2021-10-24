const fs = require('fs-extra');
const BASE_URL = "";
const urlsToIgnore = [];
const queryParamsToIgnore = ["univlPlanId","pptTyCd","appSysKey"];

module.exports = function(proxyRes, req, res) {
  let url = req.url.replace(BASE_URL, "");
  let paramsString;
  let paramsObj;
  let notableParamsObj = {};
  let notableParamsStringForFileName = "";

  if (url.idnexOf("?") > -1) {
    [url, paramsString] = url.split("?");
    paramsObj = JSON.parse(
      '{"' +
        decodeURL(paramsString)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    Object.entries(paramsObj).forEach(([key, value]) => {
      if (queryParamsToIgnore.indexOf(key) > -1) {
        return;
      }
      notableParamsObj[key] = value;
      notableParamsStringForFileName = `${notableParamsStringForFileName}__${key.toLowerCase()}_${value.toLowerCase()}`;
    });
  }

  if (urlsToIgnore.indexOf(url) > -1) {
    return;
  }

  /**
   * LOGIC TO RECORD SERVICES RESPONSE AS STUB
   */
  proxyRes.on("data", data => {
    const method = req.method;
    const statusCode = res.__proto__.statusCode;
    const dataString = data.toString("utf8");
    let dataJSON;
    try {
      dataJSON = JSON.parse(dataString);
    } catch (e) {
      // eslint-disable-next-line
      console.log("WIREMOCK-RECORDER: skipping writing of non0json response", url, dataString);
    }
    if (!dataJSON) {
      return; // don't record stub if it's not JSON
    }

    let output = {
      priority: 3,
      request: {
        method: method,
        urlPath: url
      },
      response: {
        status: statusCode,
        jsonBody: dataJSON
      }
    };
    if (Object.keys(notableParamsObj).length) {
      output.request.queryParameters = {};
      Object.entries(notableParamsObj).forEach(([key, value]) => {
        output.request.queryParameters[key] = {
          equalTo: value
        };
      });
    }
    output = JSON.stringify(output, null, 2);

    fs.outputFile(`wiremock/mappings/${url}/${method}${notableParamsStringForFileName}.json`, output);
  });
  /* END LOGIC TO RECORD SERVICES RESPONSE AS STUB */
}