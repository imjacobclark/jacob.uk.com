package com.uk.jacob.client;

import com.uk.jacob.utils.HttpUtil;
import org.json.JSONException;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;

import static org.mockito.Mockito.*;

public class GitHubClientTest {

    public static final String EXPECTED_GITHUB_API_URL = "https://api.github.com/users/imjacobclark/repos?per_page=100";

    @Test
    public void getRepositoryTotalCountShouldReturnAnExpectedInteger() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("[{'repoName':'jacob.uk.com'}]");

        final GitHubClient gitHubClient = new GitHubClient(httpUtilMock);

        Assert.assertEquals(new Integer(1), gitHubClient.getRepositoriesTotalCount("imjacobclark"));
    }

    @Test
    public void getRepositoryTotalCountShouldCallHttpUtilsDoHttpGetRequestOnce() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("[{'repoName':'jacob.uk.com'}]");

        final GitHubClient gitHubClient = new GitHubClient(httpUtilMock);

        gitHubClient.getRepositoriesTotalCount("imjacobclark");

        verify(httpUtilMock, times(1)).get(EXPECTED_GITHUB_API_URL);
    }

    @Test(expected=JSONException.class)
    public void getRepositoryTotalCountShouldThrowAJSONExceptionOnInvalidResponse() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenReturn("{wat}");

        final GitHubClient gitHubClient = new GitHubClient(httpUtilMock);

        gitHubClient.getRepositoriesTotalCount("imjacobclark");

        verify(httpUtilMock, times(1)).get(EXPECTED_GITHUB_API_URL);
    }

    @Test(expected=IOException.class)
    public void getRepositoryTotalCountShouldThrowAIOExceptionOnANetworkError() throws IOException {
        HttpUtil httpUtilMock = mock(HttpUtil.class);

        when(httpUtilMock.get(anyString())).thenThrow(IOException.class);

        new GitHubClient(httpUtilMock).getRepositoriesTotalCount("imjacobclark");

        verify(httpUtilMock, times(1)).get(EXPECTED_GITHUB_API_URL);
    }
}