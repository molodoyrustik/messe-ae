# Messe.ae

Exhibition Stand Builder & Designer in UAE with custom Material-UI design system.

## 🎨 Дизайн-система

Проект включает полную дизайн-систему, основанную на токенах из Figma:

- **Цветовая палитра**: Фиолетовые акценты с серой базовой палитрой
- **Типографика**: Система на основе Roboto с четкой иерархией
- **Компоненты**: Кастомизированные кнопки, формы и другие элементы
- **Доступность**: Соответствие WCAG для контрастности цветов

### UI Kit

Посетите `/ui-kit` для просмотра всех компонентов дизайн-системы.

📖 **Подробная документация**: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
# или
yarn install
# или
pnpm install
```

### Запуск сервера разработки

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🛠 Технологический стек

- **Next.js 15.3.3** - React фреймворк с App Router
- **React 19** - UI библиотека
- **Material-UI 7.1.1** - Компоненты с кастомной темой
- **TypeScript** - Типизация
- **Emotion** - CSS-in-JS для стилизации

## 📁 Структура проекта

```
src/
├── app/                 # Next.js App Router страницы
│   ├── page.tsx        # Главная страница
│   └── ui-kit/         # UI Kit страница
├── components/         # React компоненты
│   ├── ThemeProvider.tsx
│   └── ui-kit/         # UI Kit компоненты
└── theme/              # Дизайн-система
    ├── index.ts        # Основная тема
    ├── tokens.ts       # Дизайн-токены
    ├── palette.ts      # Цветовая палитра
    ├── typography.ts   # Типографика
    └── components.ts   # Кастомизация компонентов
```

## 🎯 Особенности

### Дизайн-токены из Figma

- Автоматически извлеченные цвета, типографика и размеры
- Соответствие оригинальному дизайну
- Легкое обновление при изменениях в Figma

### Кастомные компоненты

- Три варианта кнопок (Contained, Outlined, Text)
- Множественные размеры и состояния
- Семантические цвета для разных действий

### Типографическая система

- Иерархия заголовков H1-H6
- Варианты основного текста
- Специальные стили для ссылок и подписей

## 📊 Google Analytics

Проект поддерживает Google Analytics 4 (GA4) для отслеживания пользователей.

### Настройка

1. Получите GA4 Tracking ID из Google Analytics
2. Добавьте переменную окружения:
   ```bash
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. Google Analytics автоматически подключится в production режиме

### Использование

```typescript
import { trackEvent } from "@/components/GoogleAnalytics";

// Отслеживание событий
trackEvent("button_click", {
  button_name: "contact_form",
  page: "homepage",
});
```

### Особенности

- Автоматическое отслеживание просмотров страниц
- Анонимизация IP-адресов
- Отключение в development режиме
- Соответствие GDPR (отключены Google signals)

## 🔧 Разработка

### Добавление новых компонентов

1. Создайте компонент в `src/components/`
2. Используйте дизайн-токены из `src/theme/tokens.ts`
3. Добавьте кастомизацию в `src/theme/components.ts` при необходимости

### Обновление дизайн-системы

1. Обновите токены в `src/theme/tokens.ts`
2. Проверьте изменения в UI Kit (`/ui-kit`)
3. Обновите документацию

## 📚 Документация

- [Дизайн-система](./DESIGN_SYSTEM.md) - Полное руководство по дизайн-системе
- [Next.js Documentation](https://nextjs.org/docs) - Документация Next.js
- [Material-UI](https://mui.com/) - Документация Material-UI

## 🚀 Деплой

Рекомендуется использовать [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
npm run build
npm run start
```
