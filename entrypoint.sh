#!/usr/bin/env bash
set -Ex

function apply_path {

    echo "Check that we have GOOGLE_MAPS_API_KEY vars"
    test -n "$GOOGLE_MAPS_API_KEY"

    find ./.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s~TEMP_GOOGLE_MAPS_API_KEY~$GOOGLE_MAPS_API_KEY~g;"
}

apply_path
echo "Starting Nextjs"
exec "$@"
