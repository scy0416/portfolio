//꼭 .env에 DATABASE_URL,SUPABASE_URL,SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY 넣으셔야 동작합니다!!

# Song Portfolio

경량화한 포트폴리오 웹앱입니다. React Router 기반 SSR, i18n(영/한), 라이트/다크 퍼플 팔레트, 반응형 그리드, 마우스 스포트라이트 등 심플하고 고급스러운 UI/UX에 초점을 맞췄습니다.

## 주요 특징

- 다크/라이트 퍼플 팔레트, 부드러운 배경 그라디언트
- 포트폴리오용 홈 섹션(소개/스킬/경험/자격증/프로젝트)
- 반응형 레이아웃: 모바일부터 데스크톱까지 최적화
- i18n: 한국어/영어 번역, 언어 스위처 제공
- 테마 스위처: 라이트/다크 모드 즉시 전환
- 상단 네비/푸터 미니멀 스타일, 외부 링크(블로그/Github/메일)
- 마우스 스포트라이트 효과(부드러운 보라빛 포커스)

## 기술 스택

- React Router v7, TypeScript, Tailwind CSS
- i18next, remix-themes
- Vite 빌드, Playwright(선택)

## 빠른 시작

```bash
npm i
npm run dev
```

기본 개발 서버: `http://localhost:5173`

## 구성 및 커스터마이징

- 색상/팔레트: `app/app.css`의 `:root`/`.dark` CSS 변수 수정
- 홈 섹션: `app/features/home/screens/home.tsx` (카드/칩/그리드/버튼)
- 네비게이션: `app/core/components/navigation-bar.tsx` (링크/시트)
- 푸터: `app/core/components/footer.tsx`
- 마우스 스포트라이트: `app/core/components/mouse-spotlight.tsx`
- i18n 리소스: `app/locales/{ko,en}.ts`, 타입: `app/locales/types.ts`

  //**_포트폴리오 부분 내용을 수정하고자 하면 app/locales/{ko,en}.ts 를 수정하세요_**

## 라우팅

- 라우트 선언: `app/routes.ts`
- 기본 홈: `/` → `features/home/screens/home.tsx`

## 배포

Vite 호환 호스팅(Vercel 등)에 SSR 설정으로 배포할 수 있습니다. `react-router.config.ts`의 prerender 설정을 참고하세요.

## 라이선스

자세한 내용은 [LICENSE.md](./LICENSE.md)를 참고하세요.
