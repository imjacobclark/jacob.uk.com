package com.uk.jacob.client;

import com.uk.jacob.core.HttpUtils;
import org.apache.http.client.HttpClient;
import org.json.JSONArray;

import java.io.IOException;


public class GitHubClient {
    private HttpClient httpClient;

    public GitHubClient(HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public Integer getRepositoriesTotalCount(String username) throws IOException {
        // TODO: Move this URL into config
        String response = new HttpUtils(httpClient).doHttpGetRequest(
                "https://api.github.com/users/".concat(username).concat("/repos?per_page=100")
        );

        return new JSONArray(response).length();
    }
}
