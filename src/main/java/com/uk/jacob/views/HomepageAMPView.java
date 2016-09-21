package com.uk.jacob.views;

import com.uk.jacob.views.base.AbstractBaseView;
import org.apache.http.client.HttpClient;

public class HomepageAMPView extends AbstractBaseView {
    public HomepageAMPView(HttpClient httpClient) {
        super("homepage-amp.mustache", httpClient);
    }
}
