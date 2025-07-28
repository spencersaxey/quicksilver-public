# How to Eject A Replit Frontend into Quicksilver

### We are using Replit to generate front-ends, but will replace the schema and network code generated in order to have a finer level of control.

2025/07/15

## 1: Export ZIP from Replit

## 2: Clone Quicksilver-public into a new repo (remove .git folder to begin a new git repo) (https://github.com/spencersaxey/quicksilver-public)

### Powershell function for automating the above:

usage:

```
quicksilver newRepoName
```

```
function quicksilver {
    param(
        [Parameter(Mandatory = $true)]
        [string]$directoryName
    )
    $startTime = Get-Date
		$currentDirectory = Get-Location
		$newDirectory = Join-Path -Path $currentDirectory.Path -ChildPath $directoryName

    New-Item -ItemType Directory -Name $directoryName | Out-Null
    Set-Location -Path $directoryName

    git clone git@github.com:spencersaxey/quicksilver-public.git

    Set-Location -Path "quicksilver-public"

		Get-ChildItem -Path . -Recurse | ForEach-Object {
				Move-Item -Path $_.FullName -Destination $newDirectory -Force
		}

    Set-Location -Path $newDirectory
    Remove-Item -Recurse -Force -Path "quicksilver-public"

		git init

    $endTime = Get-Date
    $elapsedTime = $endTime - $startTime

    Write-Host "Quicksilver setup completed in $directoryName. Total time: $($elapsedTime.TotalSeconds) seconds."
}
```

## 3: Create a new folder inside your /apps folder (eg: NewFolder)

## 4: Copy contents of 'client' folder from replit into NewFolder

## 5: Copy 'tsconfig.json', 'vite.config.ts', 'tailwind config', 'post css config', and 'package.json' from the root Replit app folder INTO NewFolder

## 6: Update the paths in tsconfig, package.json, and tailwind, looking for the 'client' folder path - this is an artifact of the Replit folder structure that we don't preserve, remove 'client' from all paths. (eg: './client/src/' => './src/')

## 7: Update the copied package.json from Replit with the following:

### a: "name" should match your folder's name (eg: NewFolder)

### b: replace "dev" and "build commands with the following:

```
"dev": "vite",
"build": "vite build",
```

## 8: Create a new folder called 'shared' next to 'src' which you copied from Replit.

### a: Use AI to translate the drizzle/zod schema into typescript interfaces.

### b: Fix build errors related to schema types. (Difficulty: Super Hard)

## 9: Install Packages, Build & Run

```
npm i
npm run build
npm run dev
```
