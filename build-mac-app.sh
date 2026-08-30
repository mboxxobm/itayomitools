#!/bin/zsh
set -euo pipefail

root_dir="$(cd "$(dirname "$0")" && pwd)"
app_dir="$root_dir/BoardReadTools.app"
contents_dir="$app_dir/Contents"
resource_dir="$contents_dir/Resources/BoardReadTools"

if [[ -d "$app_dir" ]]; then
  rm -rf "$app_dir"
fi
mkdir -p "$contents_dir/MacOS" "$resource_dir"

xcrun swiftc \
  "$root_dir/mac-app/BoardReadToolsApp.swift" \
  -o "$contents_dir/MacOS/BoardReadTools" \
  -framework Cocoa \
  -framework WebKit

cp "$root_dir/index.html" "$resource_dir/index.html"
cp "$root_dir/styles.css" "$resource_dir/styles.css"
cp "$root_dir/app.js" "$resource_dir/app.js"
cp "$root_dir/mac-app/Info.plist" "$contents_dir/Info.plist"
chmod +x "$contents_dir/MacOS/BoardReadTools"

# macOSの未署名ローカルAPPとして起動できるようにアドホック署名を付ける。
codesign --force --deep --sign - "$app_dir" >/dev/null 2>&1 || true
echo "built: $app_dir"
