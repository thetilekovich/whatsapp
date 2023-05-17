<a href="https://aimeos.org/">
    <img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Aimeos logo" title="Aimeos" align="right" height="60" />
</a>

# WhatsApp Web Clone

[![Total oads](https://poser.pugx.org/aimeos/aimeos-typo3/d/total.svg)](https://thetilekovich.github.io/thetilekovich)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/?branch=master)
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)


[WhatsApp](https://whatsapp.com/) Самая популярное приложение в мире. Спросите почему? Eго эфективность, быстрыe и разные функционалы, удобность ценится пользователями уже больше 15 лет. [Я](https://thetilekovich.github.io/thetilekovich) как frontend разработчик решил сделать копию [WhatsApp Web](https://web.whatsapp.com). В этом документации расскажу вам как работать с этим проектом. Спасибо!


## Ссылки на полезные информации

- [Мне интересно:](#Github-pages)
    - [Посетить сайт на Github-Pages.](#github-pages)
    - [Локально? Не проблема!](#how-to-install)
- [Установка](#dependienses)
    - [Скачивание и запуск](#downloading)
    - [Какие зависимости используется?](#technologies)
- [Структура папок](#structure)
    - [](#seo-friendly-urls)

## Что вас интересует?

### Github-pages
- Если хотите увидеть только результат, [кликните сюда](https://thetilekovich.github.io/whatsapp)
- Если вам нужно запустить локально, тогда об это на [следующем разделе](#Установка).

## Установка

### 1. Во-первых у вас на компьютера должен быть установлен git, nodejs, npm
#### Как проверить установлен ли у меня `git`, `nodejs`, `npm`
Запустите терминал на вашем компьютере и напишите следующие команды:

```bash
    git -v
    git version 2.29.2
    npm -v
    9.2.0
    node -v
    v18.13.0
```
Если в ответ выводит цифры как в примере, значит у вас установлен и можете продолжить. А если терминал показывает ошибку, кликните ссылки внизу и продолжайте по инструкцию:
1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download)

После установки повторно сделайты команды которые мы ранее ввели и проверьте в наличии.

#### Теперь уверенно можем скачать проект через `git`

```bash
git clone https://github.com/thetilekovich/whatsapp.git

# это займет немного времени...
```
После скачивание вам нужно открыть эту папку в **VScode** или в любом другом **IDE**

Узнать какие  зависимости есть вы можете посмотреть в файле `package.json` в корне проекта (объект `dependencies`). А чтобы установить этих библиотек, нужно написать команду:

```bash
npm install
```
Если у вас установлен yarn вы можете написать команду:

```bash
yarn add .
```

***Note***: _Помните, чтобы все команды работали, ваш терминал должен находится в правильном пути и внутри проекта_

После немного времени уставновится все библиотеки проекта и вам остаётся только запустить его локально. 

Если вы откроете файле `package.json` можете увидеть объект `scripts` .
Чтобы запустить эти скрипты вам нужно сделать команду на терминале:

```json
    npm run <<script key>>
```

Если у вас yarn вы можете сделать следующую команду:
```json
    yarn run <<script key>>
```

#### А чтобы запустить проект на `localhost:3000` вам всего лишь нужно сделать команду:
```bash
npm start 
```
или 

```bash
yarn run start 
```

Теперь можете открыть любой вам удобный браузер и перейти по ссылке `http:\\localhost:3000` и посмотреть проект, если хотите изменить что-то, изменение сразу будут видны в браузере.


### Библиотеки и зависимости

| Библиотеки      | Версии  |
| -------------   | --------|
| reduxjs/toolkit | ^1.9.5  |
| axios           | ^1.4.0  |
| react           | ^18.2.0 |
| react-dom       | ^18.2.0 |
| react-redux     | ^8.0.5  |
| typescript      | ^4.9.5  |
| web-vitals      | ^2.1.4  |


## Пришло время поговорить о структуре папок

- public
    - index.html
-`src`
    - `api`
        - **constants.ts** - _В этом файле находится апи ключ для доступа `API`_
        - **greenApi.ts** - _Здесь находится все апи адреса которые использовали в приложении_
    - `app`
        - `actions`
            - _Здесь асинхронные функции которые получают данные из `API` адресов_
        - `slices`
            - _В этой папке находится `reducers`_
        - **hooks.ts** - _Типизированные хуки_
        - **store.ts** - _Файле создал `store`_
    - `components`
        - Loader
            - **index.tsx** - _Простая анимация загрузки_
        - Development
            - **index.tsx** - _Чтобы ещё не разработанные страницы не были пустыми нужно показать эту страницу_
        - `dropdowns` - _Папка где хранится компоненты `всплывающие dropdown`_
            - ChatOptionDropdown
            - NewChatDropdown
            - OptionDropdown
            - ProfileInfoDropdown
        - `Messages`
            - **IncomeMessage.tsx** - _Входящие сообщении в чате_
            - **OutgoingMessage.tsx** - _Исходящие сообщении в чате, отличается только стили_
        - `UserChat`
            - UserChatBody - _Тело чата где использую `IncomeMessage` и `OutgoingMessage`_
            - UserChatFooter - _Инпут и кнопка для отправки новой сообщений_
            - UserChatNotActive - _Когда никакой чат не активный, то есть не выбран пользователем, отображается картина_
            - **LaptopUserChat.tsx** - _Адаптация и фулскрин режим_
            - **MobileUserChat.tsx** - _Адаптация на моб. версию, скрыть - `UserNotActiveChat`_
        - **`ContactList`** - _Список контактов_
            - **index.tsx**
            - **ContactListItem.tsx** - _Один контакт_
    - `pages`
        - Login Page 
            - **index.tsx** - _Страница авторизации через QR-код_
        - User Page
            - **index.tsx** - _Страница после авторизации_
    - `statics` - _Статичные данные- иконки и фото_
        - icon
        - images
    - `types` - _Интерфейсы и типы для всего проекта, в дальнейшем можно разделить на несколько файлов._
        - **index.ts**
    - **App.tsx**
    - **index.css**
    - **index.jsx** - _Корень, где подключил на `html` и подключил `store`_

# Спасибо желаю удачи!
