package com.uk.jacob.client;

import com.uk.jacob.utils.HttpUtil;
import org.apache.http.client.HttpClient;
import org.json.JSONArray;

import java.io.IOException;


public class GitHubClient {
    private HttpClient httpClient;

    public GitHubClient(final HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public Integer getRepositoriesTotalCount(final String username) throws IOException {
        // TODO: Move this URL into config
        final String response = new HttpUtil(httpClient).doHttpGetRequest(
                "https://api.github.com/users/".concat(username).concat("/repos?per_page=100")
        );

        return new JSONArray(response).length();
    }
}
