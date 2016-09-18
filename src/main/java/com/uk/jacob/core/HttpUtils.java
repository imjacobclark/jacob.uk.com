package com.uk.jacob.core;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class HttpUtils {
    private HttpClient httpClient;

    public HttpUtils(HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public String doHttpGetRequest(String url) throws IOException {
        String output;
        HttpGet method = new HttpGet(url);
        HttpResponse response = httpClient.execute(method);

        BufferedReader br = new BufferedReader(
                new InputStreamReader(
                        response.getEntity().getContent()
                )
        );

        while ((output = br.readLine()) != null) {
            return output;
        }

        return output;
    }
}
