package com.uk.jacob.client;

import com.uk.jacob.core.HttpUtils;
import org.apache.http.client.HttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;


public class NgaasClient {
    private HttpClient httpClient;

    public NgaasClient(HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public String getRandomName() throws IOException {
        // TODO: Move this URL into config
        String response = new HttpUtils(httpClient).doHttpGetRequest("https://ngaas.api.jacob.uk.com");
        JSONObject object = new JSONObject(response);
        return object.get("name").toString();
    }
}
