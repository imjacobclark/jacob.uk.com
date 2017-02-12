package xyz.jacobclark.caches;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.function.Function;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class InMemoryCacheTest {
    InMemoryCache inMemoryCache;

    Function<String, String> githubAdaptorStub = key -> "value";

    @Before
    public void setUp(){
        inMemoryCache = new InMemoryCache(githubAdaptorStub);
    }

    @Test
    public void shouldReturnExpectedValue() throws Exception {
        assertThat(inMemoryCache.get("key"), is("value"));
    }
}