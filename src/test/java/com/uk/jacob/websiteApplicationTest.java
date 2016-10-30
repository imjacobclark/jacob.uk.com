package com.uk.jacob;

import com.uk.jacob.filters.SecurityFilter;
import com.uk.jacob.resources.HomepageResource;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.jersey.setup.JerseyEnvironment;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.junit.Test;
import org.apache.http.client.HttpClient;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class websiteApplicationTest extends websiteApplication {
    @Test
    public void getNameShouldReturnExpectedString() throws Exception {
        websiteApplication websiteApplicationUnderTest = new websiteApplication();
        websiteApplication websiteApplicationMock = spy(websiteApplicationUnderTest);

        assertEquals(websiteApplicationMock.getName(), "website");
    }

    @Test
    public void initializeShouldBootstrapAllExpectedBundles(){
        websiteApplication websiteApplicationUnderTest = new websiteApplication();
        websiteApplication websiteApplicationMock = spy(websiteApplicationUnderTest);
        Bootstrap<websiteConfiguration> bootstrapMock = mock(Bootstrap.class);

        websiteApplicationMock.initialize(bootstrapMock);

        verify(bootstrapMock, times(1)).addBundle(any(ViewBundle.class));
        verify(bootstrapMock, times(1)).addBundle(any(AssetsBundle.class));
    }

    @Test
    public void runShouldRegisterAllExpectedJerseyFilters(){
        websiteApplication websiteApplicationUnderTest = new websiteApplication(){
            protected HttpClient getHttpClient(final websiteConfiguration configuration, final Environment environment){
                return mock(HttpClient.class);
            }

            protected void registerServlets(final Environment enviroment){}
        };

        websiteApplication websiteApplicationMock = spy(websiteApplicationUnderTest);
        websiteConfiguration websiteConfigurationMock = mock(websiteConfiguration.class);
        Environment environmentMock = mock(Environment.class);
        JerseyEnvironment jerseyEnvironmentMock = mock(JerseyEnvironment.class);

        when(environmentMock.jersey()).thenReturn(jerseyEnvironmentMock);

        websiteApplicationMock.run(websiteConfigurationMock, environmentMock);

        verify(jerseyEnvironmentMock, times(1)).register(isA(SecurityFilter.class));
        verify(jerseyEnvironmentMock, times(1)).register(isA(HomepageResource.class));
    }
}
