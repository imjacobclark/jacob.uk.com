package com.uk.jacob.views;

import com.uk.jacob.views.base.AbstractBaseView;
import org.apache.http.client.HttpClient;

public class HomepageView extends AbstractBaseView {
    public HomepageView(HttpClient httpClient) {
        super("homepage.mustache", httpClient);
    }
}
