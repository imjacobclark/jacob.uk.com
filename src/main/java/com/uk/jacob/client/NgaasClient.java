package com.uk.jacob.client;

import com.uk.jacob.core.HttpUtils;
import org.apache.http.client.HttpClient;
import org.json.JSONObject;

import java.io.IOException;


public class NgaasClient {
    private HttpUtils httpUtils;

    public NgaasClient(final HttpClient httpClient){
        this.httpUtils = new HttpUtils(httpClient);
    }

    public NgaasClient(final HttpUtils httpUtils){
        this.httpUtils = httpUtils;
    }

    public String getRandomName() throws IOException {
        // TODO: Move this URL into config
        final String response = httpUtils.doHttpGetRequest("https://ngaas.api.jacob.uk.com");
        final JSONObject object = new JSONObject(response);

        return object.get("name").toString();
    }
}
