package com.uk.jacob;

import com.uk.jacob.filters.SecurityFilter;
import com.uk.jacob.resources.HomepageResource;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.View;
import io.dropwizard.views.ViewBundle;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Spy;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class websiteApplicationTest {
    @Test
    public void runShouldBeCalledWithExpectedArguments() throws Exception {
        websiteApplication websiteApplicationUnderTest = new websiteApplication();
        websiteApplication websiteApplicationMock = spy(websiteApplicationUnderTest);
        doNothing().when(websiteApplicationMock).run();
        String[] args = {};

        websiteApplicationUnderTest.main(args, websiteApplicationMock);

        verify(websiteApplicationMock, times(1)).run();
    }

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
}
