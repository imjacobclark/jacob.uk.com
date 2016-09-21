package com.uk.jacob.views.base;

import com.uk.jacob.client.GitHubClient;
import com.uk.jacob.client.NgaasClient;
import io.dropwizard.views.View;
import org.apache.http.client.HttpClient;

import java.io.IOException;

public abstract class AbstractBaseView extends View {
    private HttpClient httpClient;

    public AbstractBaseView(String template, HttpClient httpClient) {
        super(template);
        this.httpClient = httpClient;
    }

    public String getRepositoriesTotalCount() throws IOException {
        return new GitHubClient(httpClient).getRepositoriesTotalCount("imjacobclark").toString();
    }

    public String getRandomString() throws IOException {
        return new NgaasClient(httpClient).getRandomName().toString();
    }
}