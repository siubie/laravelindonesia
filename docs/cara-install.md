---
title: Cara Install Laravel
---

## Apa Sih Yang Dibutuhkan Untuk Develop Laravel

1. Php : minimal php 7.4
2. Mysql : mysql 8
3. Composer : ambil yang stable  
4. Nodejs : ambil yang stable
5. Git : ikut versi yang ada

### Gimana dengan Xampp

![ninja meme](/img/ninja.png)

Untuk development laravel saya lebih memilih setup manual masing masing stack php, mysql, composer, nodejs dan git. Kenapa ? karena dengan menggunakan stack yang diinstall sendiri anda akan lebih "dekat" dengan "console", nantinya ketika ngoding laravel bakalan banyak berinteraksi dengan console / terminal.

Bukan tidak bisa tapi ini pilihan saja, jika anda masih belum siap untuk lompat ke console silahkan tetap menggunakan xampp ga masalah sama aja :D 

### Jangan gunakan Xampp untuk production

Nah ini juga merupakan salah satu alasan kenapa saya tidak merekomendasikan Xampp untuk laravel, kalo belajar basic masi oke gpp pake xampp karena saya pun dulu memulai belajar dari sana. Tapi ketika kita nggarap project dan terbiasa dengan xampp perlu kita pahami xampp tidak di setup untuk production cuma di set up untuk development. Demikian juga dengan stack yang kita install sendiri untuk development di atas tidak bisa serta merta di pake untuk production karena ada proses tersendiri untuk membuat server yang production ready.

## Permudah Install Dengan Chocolatey
Chocolatey adalah package manager untuk mempermudah proses install di windows, ini layaknya brew mac dan apt di ubuntu. Kenapa pake package manager ? untuk mempermudah hidupmu ges wkwkw, karena kalo mau install cuma butuh satu kali command dan semua proses install kyk download software nya, next next nya dan konfigurasi path nya sudah berjalan otomatis.

Selain otomatis juga bisa dipilih versi software yang mana yang mau diinstall asli enak.

## Install Php
![chocolatey php](/img/php.png)

Proses install php 

```bash
choco install php
```

Untuk install versi lain dari php cek di [cek versi php](https://community.chocolatey.org/packages/php#versionhistory).

![pilih versi php](/img/php-version.png)

## Install Mysql 

[Cek Package Mysql](https://community.chocolatey.org/packages/mysql) 

Proses install Mysql

```bash
choco install mysql
```

## Install Composer
[Cek Package Composer](https://community.chocolatey.org/packages/composer)

Proses install composer

```bash
choco install composer
```

## Install Nodejs
[Cek Package Nodejs](https://community.chocolatey.org/packages/nodejs)

Proses install nodejs

```bash
choco install nodejs
```

## Install Git
[Cek Package Git](https://community.chocolatey.org/packages/git)

Proses install git

```bash
choco install git
```

## Pilihan Mode Install Laravel 8

Ada dua pilihan untuk nginstall laravel yaitu

### Laravel Installer
Install dulu laravel installer pake composer

```bash
composer global require laravel/installer
```

```bash
laravel new blog
```

### Composer create-project

```bash
composer create-project --prefer-dist laravel/laravel:^7.0 blog
```

## Setup Setelah Install

1. Setup .env
2. Setup Database
3. Setup Application key