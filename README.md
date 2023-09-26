# Findings

1. If multiple route segment `revalidate` values are set, the lowest value

   - from the docs: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidation-frequency
   - The lowest revalidate across each layout and page of a single route will determine the
     revalidation frequency of the entire route. This ensures that child pages are revalidated
     as frequently as their parent layouts.

2. It looks like the cache key involves headers as well. Random values in the header causes cache misses,
   even with the `next.revalidate` option getting set.

3. Individual `next.revalidate` values ALWAYS take precedence over route segment config values,
   whether or not the value is higher or lower than the route segment config value

4. With dynamic functions, even if there is a revalidate value > 0 set on the route segment config,
   it looks like this causes nextjs to skip the data cache.
