package com.uk.jacob;

import com.uk.jacob.filters.CacheControlFilter;
import com.uk.jacob.filters.SecurityFilter;
import com.uk.jacob.resources.HomepageResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.client.HttpClientBuilder;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.apache.http.client.HttpClient;

public class websiteApplication extends Application<websiteConfiguration> {

    public static void main(final String[] args) throws Exception {
        new websiteApplication().run(args);
    }

    @Override
    public String getName() {
        return "website";
    }

    @Override
    public void initialize(final Bootstrap<websiteConfiguration> bootstrap) {
        bootstrap.addBundle(new ViewBundle<websiteConfiguration>());
        bootstrap.addBundle(new AssetsBundle("/public/", "/public"));
    }

    @Override
    public void run(final websiteConfiguration configuration, final Environment environment) {
        final HttpClient httpClient = new HttpClientBuilder(environment).using(configuration.getHttpClientConfiguration()).build(getName());

        environment.jersey().register(new CacheControlFilter());
        environment.jersey().register(new SecurityFilter());
        environment.jersey().register(new HomepageResource(httpClient));
    }

}