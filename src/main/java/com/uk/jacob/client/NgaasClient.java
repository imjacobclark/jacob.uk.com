package com.uk.jacob.client;

import com.uk.jacob.utils.HttpUtil;
import org.apache.http.client.HttpClient;
import org.json.JSONObject;

import java.io.IOException;


public class NgaasClient {
    private HttpUtil httpUtil;

    public NgaasClient(final HttpClient httpClient){
        this.httpUtil = new HttpUtil(httpClient);
    }

    public NgaasClient(final HttpUtil httpUtil){
        this.httpUtil = httpUtil;
    }

    public String getRandomName() throws IOException {
        // TODO: Move this URL into config
        final String response = httpUtil.get("https://ngaas.api.jacob.uk.com");
        final JSONObject object = new JSONObject(response);

        return object.get("name").toString();
    }
}
