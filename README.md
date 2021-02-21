# satagro - price - list

Zadanie rekrutacyjne polegające na napisaniu prostej strony wyświetlającej stronę z ofertą planów abonamentowych. Dane dotyczące planów premium i professional pobierane są z API.

## Technologie i biblioteki użyte w projekcie 🚀

- React
- Typescript
- Scss
- clsx
- dotenv
- https://api.ipdata.co/ do ustalania lokalizacji użytkownika i ustawienia wstępnej wersji językowej

### Instrukcja uruchomienia

1. Klonujemy repozytorium poleceniem

```
git clone https://github.com/jundymek/satagro-price-list.git
```

2. Wchodzimy do katologu z repozytorium i instalujemy niezbędne zależności

```
npm install lub yarn
```

3. Uruchamiamy `json-server`, który będzie naszym API

```
json-server --watch db.json
```

4. Na innym porcie uruchamiamy aplikację

```
npm start lub yarn start
```
