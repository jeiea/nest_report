# Nest example for report

## Reproducible steps

```
git clone https://github.com/jeiea/nest_report.git
cd nest_report
pnpm install
pnpm run start
```

## Expected behavior
```
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [NestFactory] Starting Nest application...
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] ApplicationModule dependencies initialized +28ms
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] OneModule dependencies initialized +0ms
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] TwoModule dependencies initialized +0ms
first service module init
second service module init
third service module init
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [NestApplication] Nest application successfully started +7ms
```

## Actual behavior

```
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [NestFactory] Starting Nest application...
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] ApplicationModule dependencies initialized +28ms
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] OneModule dependencies initialized +0ms
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [InstanceLoader] TwoModule dependencies initialized +0ms
third service module init
first service module init
second service module init
[Nest] 56283  - 10/22/2021, 5:18:38 PM     LOG [NestApplication] Nest application successfully started +7ms
```

## Additional context

Changing `src/app.module.ts:6`'s `imports` order affects to this behavior.
