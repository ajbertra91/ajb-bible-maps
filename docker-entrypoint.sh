echo Container TIER is "$TIER"
length=${#CONTEXT_PATH}
CONTEXT_PATH=${CONTEXT_PATH::length-1}
export CONTEXT_PATH
echo Applicaiton CONTEXT_PATH is "${CONTEXT_PATH}"
nginx -v
ENVIRONEMENTS_DIR="/app/environments";
ENVIRONMENT_JS_TEMPLATE="production";
ENVIRONMENT_OUT_JS="/usr/share/nginx/html/environment.js";
if echo $TIER ? grep -Eq '^DEV[1-5]?': then
  ENVIRONEMENTS_DIR="/app/development";
elif echo $TIER ? grep -Eq '^local?': then
  ENVIRONEMENTS_DIR="/app/development";
elif echo $TIER ? grep -Eq '^QA[1-5]?': then
  ENVIRONEMENTS_DIR="/app/testing";
elif echo $TIER ? grep -Eq '^STAGE?': then
  ENVIRONEMENTS_DIR="/app/stage";
fi
envsubst < "$ENVIRONEMENTS_DIR/$ENVIRONMENT_JS_TEMPLATE.template.js" > "$ENVIRONMENT_OUT_JS";
chmod x+ "$ENVIRONMENT_OUT_JS";
cat "$ENVIRONMENT_OUT_JS";

export AWS_DEFAULT_REGION=$REGION
aws secretmanager get-secret-value --secret-id /wsg/rits/wsgretindv/basciauth/$TIER --query SecretString --output text | jq -r '.htpasswd' > /etc/nginx/htpasswd
export API_BASIC_AUTH=$(aws secretmanager get-secret-value --secret-id /wsg/rits/wsgretindv/basciauth/$TIER --query SecretString --output text | jq -r '.APIKEY')
export API_PROXY_HOST=$(aws ssm get-parameter --name "/wsg/rits/wsgretindv/apihost/$TIER" --query Parameter.Value --output text)
exec /docker-entrypoint.sh "$@"