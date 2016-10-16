package com.uk.jacob;

import com.uk.jacob.filters.AssetCacheControlFilter;
import com.uk.jacob.filters.SecurityFilter;
import com.uk.jacob.resources.HomepageResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.client.HttpClientBuilder;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.apache.http.client.HttpClient;

import javax.servlet.DispatcherType;
import java.util.EnumSet;

public class websiteApplication extends Application<websiteConfiguration> {

    public static void main(final String[] args, websiteApplication application) throws Exception {
        injectAndRunApplicationClass(args, application);
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

        environment.servlets().addFilter("AssetCacheControlFilter", new AssetCacheControlFilter())
                .addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/public/*");

        environment.jersey().register(new SecurityFilter());
        environment.jersey().register(new HomepageResource(httpClient));
    }

    private static void injectAndRunApplicationClass(String[] args, websiteApplication application) throws Exception {
        if(application == null){
            new websiteApplication().run(args);
        }else{
            application.run(args);
        }
    }
}
