package com.uk.jacob.client;

import com.uk.jacob.core.HttpUtils;
import org.json.JSONException;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;

import static org.mockito.Mockito.*;

public class NgaasClientTest {
    @Test
    public void getRandomNameShouldReturnAnExpectedString() throws IOException {
        HttpUtils httpUtilsMock = mock(HttpUtils.class);

        when(httpUtilsMock.doHttpGetRequest(anyString())).thenReturn("{'name':'jacob-clark'}");

        final NgaasClient ngaasClient = new NgaasClient(httpUtilsMock);

        Assert.assertEquals("jacob-clark", ngaasClient.getRandomName());
    }

    @Test
    public void getRandomNameShouldCallHttpUtilsDoHttpGetRequestOnce() throws IOException {
        HttpUtils httpUtilsMock = mock(HttpUtils.class);

        when(httpUtilsMock.doHttpGetRequest(anyString())).thenReturn("{'name':'jacob-clark'}");

        new NgaasClient(httpUtilsMock).getRandomName();

        verify(httpUtilsMock, times(1)).doHttpGetRequest(anyString());
    }

    @Test(expected= JSONException.class)
    public void getRandomNameShouldThrowAJSONExceptionOnInvalidResponse() throws IOException {
        HttpUtils httpUtilsMock = mock(HttpUtils.class);

        when(httpUtilsMock.doHttpGetRequest(anyString())).thenReturn("{wat}");

        new NgaasClient(httpUtilsMock).getRandomName();

        verify(httpUtilsMock, times(1)).doHttpGetRequest(anyString());
    }

    @Test(expected= IOException.class)
    public void getRandomNameShouldThrowAIOExceptionOnANetworkError() throws IOException {
        HttpUtils httpUtilsMock = mock(HttpUtils.class);

        when(httpUtilsMock.doHttpGetRequest(anyString())).thenThrow(IOException.class);

        new NgaasClient(httpUtilsMock).getRandomName();

        verify(httpUtilsMock, times(1)).doHttpGetRequest(anyString());
    }
}