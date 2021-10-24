import { is } from "base-ui-utilities/lib/is-type";
import { registerServiceRequestInterceptor } from "base-ui-data-providers/lib/service-request";
import { environmentInterceptor } from "base-ui-data-providers/lib/service-request/interceptors/environment-interceptor";
import { environment, isTesting, isDevelopment } from "../environment";

if (is.boolean.any(isTesting(), isDevelopment())) {
  registerServiceRequestInterceptor(
    environmentInterceptor("QA1", (endpoint: string): boolean => {
      return endpoint.indexOf(`${environment.API_BASE_URL}/contribution`) === 0;
    })
  );
}
