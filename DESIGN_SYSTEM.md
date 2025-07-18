# Messe.ae Design System

Кастомная тема Material-UI для проекта Messe.ae, основанная на дизайн-токенах, извлеченных из Figma.

## 🎨 Обзор

Дизайн-система Messe.ae включает в себя:
- **Цветовую палитру** с фиолетовыми акцентами и серой базовой палитрой
- **Типографическую систему** на основе шрифта Roboto
- **Компоненты кнопок** с тремя вариантами и состояниями
- **Компоненты форм** с плавающими лейблами и состояниями
- **Чипы** для фильтрации и выбора категорий
- **Элементы меню** с подчеркиванием активных разделов
- **Соответствие WCAG** для доступности

## 📁 Структура файлов

```
src/theme/
├── index.ts          # Основной файл темы
├── tokens.ts         # Дизайн-токены
├── palette.ts        # Цветовая палитра
├── typography.ts     # Типографика
└── components.ts     # Кастомизация компонентов

src/components/
├── ThemeProvider.tsx # Провайдер темы
└── ui-kit/          # UI Kit компоненты
    ├── UIKitLayout.tsx
    ├── ColorPalette.tsx
    ├── TypographyShowcase.tsx
    ├── ButtonShowcase.tsx
    ├── FormShowcase.tsx
    ├── ChipShowcase.tsx
    └── MenuShowcase.tsx
```

## 🎯 Цветовая палитра

### Основная палитра (Primary)
Фиолетовые цвета для акцентов, кнопок и интерактивных элементов:

- **50**: `#E9EAF4` - Очень светлый фон
- **100**: `#C7CAE3` - Светлый фон
- **200**: `#A2A9D0` - Светлые элементы
- **300**: `#7F87BD` - Средние элементы
- **400**: `#656CAF` - **Основной цвет** (кнопки, ссылки)
- **500**: `#4C53A2` - Темные элементы
- **600**: `#464B98` - Hover состояния
- **700**: `#3E418C` - Активные состояния
- **800**: `#363880` - Очень темные элементы
- **900**: `#29266C` - Самый темный

### Базовая палитра (Grey)
Серые цвета для фонов, текста и состояний:

- **White**: `#FFFFFF`
- **50**: `#F5F5F5`
- **100**: `#E9E9E9`
- **200**: `#D9D9D9`
- **300**: `#C4C4C4`
- **400**: `#9D9D9D`
- **500**: `#7B7B7B`
- **600**: `#555555`
- **700**: `#434343`
- **800**: `#262626`
- **900**: `#000000`

### Семантические цвета
- **Error**: `#BC3A1F` - Ошибки, обязательные поля
- **Secondary**: `#A64B66` - Вторичные кнопки
- **Success**: `#008337` - Успешные действия

## ✍️ Типографика

Основан на шрифте **Roboto** с четкой иерархией размеров:

### Заголовки
- **H1**: 96px / 108px, Regular (400)
- **H2**: 60px / 72px, Regular (400)
- **H3**: 54px / 60px, Regular (400)
- **H4**: 34px / 42px, Regular (400), 1% letter-spacing
- **H5**: 24px / 28px, Regular (400), 1% letter-spacing
- **H6**: 20px / 24px, Regular (400), 1% letter-spacing

### Основной текст
- **Body1**: 16px / 20px, Regular (400), 2% letter-spacing
- **Body2**: 14px / 18px, Regular (400), 2% letter-spacing

### Вспомогательный текст
- **Overline**: 14px / 18px, Regular (400), 4% letter-spacing, UPPERCASE
- **Caption**: 12px / 16px, Regular (400), 4% letter-spacing
- **Caption Mobile**: 10px / 12px, Regular (400)

## 🔘 Компоненты кнопок

### Варианты кнопок

#### 1. Contained (Primary)
- **Цвет**: `#656CAF` (primary.400)
- **Текст**: Белый
- **Использование**: Основное действие на странице
- **Тень**: Да

#### 2. Outlined (Secondary)
- **Цвет**: Прозрачный фон, граница `#A2A9D0`
- **Текст**: `#656CAF`
- **Использование**: Вторичное действие
- **Тень**: Нет

#### 3. Text (Tertiary)
- **Цвет**: Прозрачный фон
- **Текст**: `#656CAF`
- **Использование**: Дополнительные действия, ссылки
- **Тень**: Нет

### Размеры кнопок
- **Large**: 48px высота, 8px 22px padding, 24px шрифт
- **Medium**: 36px высота, 6px 16px padding, 16px шрифт
- **Small**: 32px высота, 4px 10px padding, 14px шрифт
- **Mobile**: Авто высота, 4px 8px padding, 12px шрифт

### Состояния кнопок
- **Enabled**: Обычное состояние
- **Hovered**: При наведении (темнее на 1 уровень)
- **Focused**: При фокусе (с outline)
- **Pressed**: При нажатии (темнее на 2 уровня)
- **Disabled**: Отключено (серый цвет)

## 📐 Правила использования

### Кнопки
✅ **Делайте:**
- Используйте активные глаголы ("Go to the chat")
- Уточняйте объект действия
- Используйте текст в одну строку
- Максимум 2 кнопки разного приоритета вместе
- Расстояние между кнопками — 8px

❌ **Не делайте:**
- Не используйте 3 и более кнопок
- Не используйте две одинаковые по приоритету кнопки
- Не используйте текст в две и более строки
- Не пишите текст без глагола действия

### Типографика
✅ **Использование:**
- H1-H5 — для заголовков
- Body1, Body2 — для основного текста
- Overline — для ссылок и акцентов
- Caption — для подписей и вспомогательного текста

## 🚀 Использование в коде

### Импорт темы
```typescript
import { messeTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={messeTheme}>
      {/* Ваше приложение */}
    </ThemeProvider>
  );
}
```

### Использование дизайн-токенов
```typescript
import { colors, typography, spacing } from './theme/tokens';

// В компонентах
const MyComponent = () => (
  <Box sx={{ 
    backgroundColor: colors.primary[400],
    padding: spacing.md,
    fontSize: typography.fontSize.body1 
  }}>
    Content
  </Box>
);
```

### Кастомные варианты типографики
```typescript
<Typography variant="captionMobile">
  Мобильная подпись
</Typography>

<Typography variant="link">
  Ссылка с подчеркиванием
</Typography>
```

## 🎯 UI Kit

Для просмотра всех компонентов дизайн-системы перейдите на страницу `/ui-kit`, где представлены:
- Полная цветовая палитра с кодами цветов
- Все варианты типографики с примерами
- Компоненты кнопок во всех состояниях и размерах
- Руководства по использованию

## ♿ Доступность

Все цвета соответствуют рекомендациям WCAG:
- **AAA** — контраст 7.0+ для длинных текстов
- **AA** — контраст 4.5+ для текста менее 18px
- **AA Large** — контраст 3.0+ для текста 18px+

## 📝 Компоненты форм

### Состояния полей ввода
- **Enabled**: Граница #C4C4C4 (1px), текст #7B7B7B
- **Hovered**: Граница #7B7B7B (1px)
- **Focused**: Граница #656CAF (2px), лейбл #656CAF
- **Error**: Граница #BC3A1F (1px), лейбл #BC3A1F
- **Disabled**: Граница #C4C4C4 (1px), текст #9D9D9D

### Размеры текста
- **Web**: 16px / 24px, 2% letter-spacing
- **Mobile**: 14px / 18px, 2% letter-spacing
- **Лейбл (плавающий)**: 12px / 16px, 4% letter-spacing
- **Лейбл Mobile**: 10px / 12px

### Правила использования
✅ **Делайте:**
- Используйте плавающие лейблы для экономии места
- Добавляйте иконки для улучшения UX
- Четкие сообщения об ошибках
- Адаптивные размеры для мобильных

## 🏷️ Чипы

### Размеры
- **Medium**: 24px шрифт, 28px line-height, 8px 12px padding
- **Small**: 16px шрифт, 24px line-height, 4px 8px padding

### Состояния
- **Unselected**: Фон #E9EAF4, текст #656CAF
- **Selected**: Фон #656CAF, текст #FFFFFF
- **Hover (Unselected)**: Фон #C7CAE3
- **Hover (Selected)**: Фон #4C53A2
- **Focused**: Граница #A2A9D0 (unselected), фон #464B98 (selected)
- **Disabled**: Фон #A2A9D0, текст #FFFFFF

### Правила использования
✅ **Делайте:**
- Используйте для фильтрации и категоризации
- Medium размер для десктопа, Small для мобильных
- Максимум 8-10 чипов в одной группе
- Четкие и короткие лейблы (1-2 слова)

## 🧭 Элементы меню

### Размеры (Tailwind CSS Reference)
- **Medium**: text-2xl (24px), leading-7 (28px), font-bold (700), tracking-tight (-0.025em)
  - Контейнер: h-8 (32px), py-1 (4px padding)
  - Подчеркивание: w-px (1px) × h-[3px], top-[26px]
- **Small**: 16px шрифт, 24px line-height, font-bold (700), tracking-tight (-0.025em)
  - Подчеркивание: w-px (1px) × 2px, top 19px

### Состояния
- **Default**: text-Primary-purple-500 (#4C53A2), opacity-0 (подчеркивание скрыто)
- **Hover**: text-Primary-purple-500 (#4C53A2), opacity-1 (подчеркивание видно)
- **Selected**: text-Primary-purple-500 (#4C53A2), opacity-1 (подчеркивание видно)
- **Подчеркивание**: bg-Primary-purple-100 (#C7CAE3)

### Правила использования
✅ **Делайте:**
- Используйте для основной навигации
- Medium размер для десктопа, Small для мобильных
- Максимум 5-7 элементов в горизонтальном меню
- Четкие и понятные названия разделов
- Подчеркивание показывает активный раздел

## 🔄 Обновления

При изменении дизайна в Figma:
1. Обновите токены в `src/theme/tokens.ts`
2. Проверьте соответствие в UI Kit
3. Обновите документацию
4. Протестируйте доступность
