@echo off

rem #1 first do: pnpm i [this will wait for a while]

rem #2 then can build using npm scripts
set NODE_OPTIONS="--max-old-space-size=8192"
call pnpm run build:grid
