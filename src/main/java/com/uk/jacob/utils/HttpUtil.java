package com.uk.jacob.utils;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class HttpUtil {
    private HttpClient httpClient;
    private final Logger logger = LoggerFactory.getLogger(HttpUtil.class);

    public HttpUtil(HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public String doHttpGetRequest(String url) throws IOException {
        long startTime = System.currentTimeMillis();

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

        long elapsedTime = System.currentTimeMillis() - startTime;
        logger.debug("Total elapsed http request/response time in milliseconds for " + url + ": " + elapsedTime);

        return output;
    }
}
