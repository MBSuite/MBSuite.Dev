#!/usr/bin/env bash
# ------------------------------------------------------------
# audit_modules.sh
#   Scans each Micro‑Business module for files that were
#   mistakenly copied from other modules (e.g., FNB code in Service).
#   Generates raw logs under the PLAN directory for further review.
# ------------------------------------------------------------

BASE="/home/neon13/workspace/services/next/00-MAIN-WEB"
MODULES=(
  "Micro-Business-Service"
  "Micro-Business-Retail"
  "Micro-Business-Rental"
  "Micro-Business-Hotel"
  "Micro-Business-FNB"
  "Micro-Business-Pharmacy"
)

OUT_DIR="$BASE/MBSuite.Dev/PLAN"
mkdir -p "$OUT_DIR"

# Keywords that belong only to a specific module (add more as needed)
declare -A KEYWORDS
KEYWORDS["FNB"]="CacheChef RestaurantMenu KitchenOrder"
# Example: if other modules have unique identifiers, extend the map.

for MOD in "${MODULES[@]}"; do
  MODPATH="$BASE/$MOD"
  LOGFILE="$OUT_DIR/audit-raw-$MOD.log"
  echo "=== Auditing $MOD ===" > "$LOGFILE"

  # Git status (short)
  git -C "$MODPATH" status -s >> "$LOGFILE"

  # Files changed compared to HEAD
  echo "\n--- Modified files (git diff --name-only) ---" >> "$LOGFILE"
  git -C "$MODPATH" diff --name-only HEAD >> "$LOGFILE"

  # Search for keywords that do NOT belong to this module
  for KEY in "${!KEYWORDS[@]}"; do
    if [[ "$MOD" != *"$KEY"* ]]; then
      for TERM in ${KEYWORDS[$KEY]}; do
        echo "\n--- Search for \"$TERM\" (should be in $KEY only) ---" >> "$LOGFILE"
        grep -R "${TERM}" "$MODPATH" || true >> "$LOGFILE"
      done
    fi
  done

done

echo "Audit completed. Logs are in $OUT_DIR"
