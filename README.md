# Projekt zaliczeniowy - Projektowanie Aplikacji Internetowych

Tytul: _TenderHub - aplikacja do obsługi przetargów_

Autor: _Cezary924_

Jezyk: _JavaScript, EJS_

Rok: _2023/2024_


## Zagadnienie biznesowe


Zadaniem projektowym było stworzenie aplikacji internetowej umożliwiającej ogłaszanie przetargów oraz wzięcie w nich udziału.


## Funkcjonalności


- Strona główna - wyświetlająca krótką informację o przeznaczeniu systemu.
- Strona z listą przetargów - wyświetlająca tabelę aktywnych przetargów; po wybraniu jednego z nich wyświetlona zostaje strona ze szczegółami przetargu oraz możliwością złożenia oferty (należy w wyświetlonym formularzu wprowadzić dane składającego oraz ofertę cenową).
- Strona z listą zakończonych przetargów - wyświetla listę zakończonych przetargów; po wybraniu jednego z nich wyświetlona zostaje strona ze szczegółami przetargu oraz tabelą najkorzystniejszych cenowo ofert (lub informacji o braku takowych).
- Strona z formularzem dodawania przetargu - wyświetla formularz dodawania przetargu do systemu; chętna instytucja musi wprowadzić: swoje dane, swój budżet i charakterystykę przetargu.


## Charakterystyka technologiczna


- Back-end:
	- środowisko Node.js,
	- pakiet Express.js (architektura MVC - zachowanie logicznej warstwowej (podzielonej) architektury aplikacji),
	- relacyjna baza danych SQL (MySQL).
- Front-end:
	- mechanizm umożliwiający generowanie widoku strony w modelu Server Side Rendering,
	- podstawowy HTML i CSS.
