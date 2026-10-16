param(
  [string]$BaseUrl = 'http://localhost:3000'
)

$response = Invoke-WebRequest -Uri "$BaseUrl/" -UseBasicParsing
if ($response.StatusCode -ne 200) {
  throw "Health check failed with HTTP $($response.StatusCode)"
}

Write-Output 'Deployment health check passed.'
