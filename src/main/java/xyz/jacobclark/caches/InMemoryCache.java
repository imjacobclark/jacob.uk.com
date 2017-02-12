package xyz.jacobclark.caches;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

public class InMemoryCache<T> {
    private LoadingCache<String, T> localLoadingCache;

    public InMemoryCache(Function<String, T> command) {
        this.localLoadingCache = CacheBuilder
                .newBuilder()
                .expireAfterWrite(1, TimeUnit.DAYS)
                .build(cacheLoader(command));
    }

    public T get(String key) throws ExecutionException {
        return localLoadingCache.get(key);
    }

    private CacheLoader<String, T> cacheLoader(Function<String, T> command) {
        return new CacheLoader<String, T>() {
            public T load(String key) {
                return command.apply(key);
            }
        };
    }
}
