package com.uk.jacob.client;

import com.uk.jacob.utils.HttpUtil;
import org.json.JSONException;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;

import static org.mockito.Mockito.*;

public class NgaasClientTest {
    @Test
    public void getRandomNameShouldReturnAnExpectedString() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("{'name':'jacob-clark'}");

        final NgaasClient ngaasClient = new NgaasClient(httpUtilMock);

        Assert.assertEquals("jacob-clark", ngaasClient.getRandomName());
    }

    @Test
    public void getRandomNameShouldCallHttpUtilsDoHttpGetRequestOnce() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("{'name':'jacob-clark'}");

        new NgaasClient(httpUtilMock).getRandomName();

        verify(httpUtilMock, times(1)).get(anyString());
    }

    @Test(expected=JSONException.class)
    public void getRandomNameShouldThrowAJSONExceptionOnInvalidResponse() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("{wat}");

        new NgaasClient(httpUtilMock).getRandomName();

        verify(httpUtilMock, times(1)).get(anyString());
    }

    @Test(expected=IOException.class)
    public void getRandomNameShouldThrowAIOExceptionOnANetworkError() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenThrow(IOException.class);

        new NgaasClient(httpUtilMock).getRandomName();

        verify(httpUtilMock, times(1)).get(anyString());
    }
}