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

    public String getRandomName() {
        // TODO: Move this URL into config
        String response = null;
        try {
            response = new HttpUtils(httpClient).doHttpGetRequest("https://ngaas.api.jacob.uk.com");
        } catch (IOException e) {
            System.out.println("here");
            e.printStackTrace();
            System.out.println(e);
        }
        JSONObject object = new JSONObject(response);

        System.out.println(object.get("name"));

        return "test";
    }
}
