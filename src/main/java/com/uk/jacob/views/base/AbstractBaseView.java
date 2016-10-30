package com.uk.jacob.views.base;

import com.uk.jacob.client.GitHubClient;
import com.uk.jacob.client.NgaasClient;
import com.uk.jacob.utils.HttpUtil;
import io.dropwizard.views.View;
import org.apache.http.client.HttpClient;

import javax.cache.Cache;
import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;
import javax.cache.spi.CachingProvider;
import java.io.IOException;

public abstract class AbstractBaseView extends View {
    private HttpUtil httpUtil;

    public AbstractBaseView(String template, HttpClient httpClient) {
        super(template);
        this.httpUtil = new HttpUtil(httpClient);
    }

    public String getRepositoriesTotalCount() throws IOException {
        return new GitHubClient(httpUtil).getRepositoriesTotalCount("imjacobclark").toString();
    }

    public String getRandomString() throws IOException {
        return new NgaasClient(httpUtil).getRandomName().toString();
    }
}