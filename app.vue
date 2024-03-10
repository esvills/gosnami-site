<template>
  <div class="bg-grey-800 min-h-dvh flex flex-col px-24 desktop-l:px-64">
    <div class="flex justify-between desktop-m:px-24 py-24">
      <img class="h-24 desktop-m:h-[28px]" src="/images/logo.svg" alt="Gosnami logo"/>
      <div class="flex gap-16 mobile:hidden">
        <a href="https://app.gosnami.com/login/">
          <div
              class="h-40 rounded-40 px-20 text-headingSemiBold text-grey-0 inline-flex items-center justify-center bg-grey-0/20">
            Авторизация
          </div>
        </a>
        <a href="https://app.gosnami.com/register/">
          <div
              class="h-40 rounded-40 px-20 text-headingSemiBold text-grey-0 inline-flex items-center justify-center bg-brand-green-1000">
            Регистрация
          </div>
        </a>
      </div>
    </div>
    <div
        class="bg-grey-0 rounded-24 desktop-m:rounded-40 w-full desktop-m:flex-1 relative overflow-hidden z-10 tablet-s:max-h-[777px]">
      <div class="p-24 flex flex-col desktop-m:flex-row justify-between items-center desktop-m:pl-122 desktop-m:pt-100">
        <div class="flex flex-col max-w-full w-[481px] flex-shrink-0 items-center">
          <div class="text-mobileHeroBold desktop-m:text-heroBold text-grey-800">
            Онлайн автошкола
            в Испании 🇪🇸
          </div>
          <div class="text-headingRegular desktop-m:text-heroDescriptionRegular text-grey-600 mt-8 desktop-m:mt-16">
            Онлайн обучение теории ПДД Испании: гибкость и доступность обучения из любой точки страны и за её
            пределами.
          </div>
          <div class="mt-32 desktop-m:mt-[52px] flex gap-16 desktop-m:gap-24 w-full mobile:flex-col">
            <a href="https://app.gosnami.com/register/"
               class="h-40 desktop-m:h-64 rounded-40 desktop-m:flex-1 px-32 text-headingSemiBold desktop-m:text-SubtitleSemiBold text-grey-0 inline-flex items-center justify-center bg-brand-green-1000">
              Регистрация
            </a>
            <a href="https://app.gosnami.com/login/"
               class="h-40 desktop-m:h-64 rounded-40 desktop-m:flex-1 px-32 text-headingSemiBold desktop-m:text-SubtitleSemiBold inline-flex items-center justify-center border-2 border-grey-800 text-grey-800">
              Авторизация
            </a>
          </div>
        </div>
        <div class="desktop-m:pr-16 h-auto desktop-m:h-[571px] pt-64 desktop-m:pt-0">
          <picture>
            <source srcset="/images/image.png,/images/image2x.png 2x"
                    media="(min-width: 0px)"
            />
            <img class="w-full h-full object-contain" src="/images/image.png" alt=""/>
          </picture>
        </div>
      </div>

      <div class="absolute pointer-events-none inset-0 -z-10">
        <picture>
          <source srcset="/images/hero_bg.jpg,/images/hero_bg2x.jpg 2x"
                  media="(min-width: 0px)"
          />
          <img class="object-cover w-full h-full" src="/images/hero_bg.jpg" alt=""/>
        </picture>
      </div>
    </div>
    <div
        class="flex flex-col desktop-m:flex-row my-24 desktop-m:my-40 w-full justify-between desktop-m:px-24 items-baseline">
      <div class="flex flex-col desktop-m:flex-row gap-16 desktop-m:gap-80">
        <div class="flex flex-col gap-24 desktop-m:max-w-[419px]">
          <div class="text-title4Bold desktop-m:text-title3Bold text-grey-0">
            Контакты
          </div>
          <div class="flex flex-col gap-8">
            <div class="text-textRegular desktop-m:text-headingRegular text-grey-0 opacity-50">
              Контактный центр
            </div>
            <a href="tel:+34 663 540 480">
              <div class="text-SubtitleBold text-grey-0">
                +34 663 540 480
              </div>
            </a>
          </div>
          <div class="flex gap-16">
            <a href="https://t.me/gosnami_es" target="_blank" rel="noreferrer"
               class="h-40 rounded-40 pl-16 pr-20 text-headingSemiBold text-grey-0 inline-flex items-center justify-center bg-grey-0/30 gap-6">
              <img src="/images/telegram_24.svg" alt="Telegram logo"/>
              Telegram
            </a>
            <a href="https://wa.me/message/5W7LMXOCOD2XO1?src=qr" target="_blank" rel="noreferrer"
               class="h-40 rounded-40 pl-16 pr-20 text-headingSemiBold text-grey-0 inline-flex items-center justify-center bg-grey-0/30 gap-6">
              <img src="/images/whatsapp_24.svg" alt="WhatsApp logo"/>
              WhatsApp
            </a>
          </div>
          <div class="flex flex-col gap-8">
            <div class="text-textRegular desktop-m:text-headingRegular text-grey-0 opacity-50">
              Общие вопросы
            </div>
            <a href="mailto:hello@gosnami.com">
              <div class="text-SubtitleBold text-grey-0">
                hello@gosnami.com
              </div>
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-24 max-w-[419px]">
          <div class="text-title4Bold desktop-m:text-title3Bold text-grey-0">
            Офис
          </div>
          <div class="flex flex-col gap-8">
            <div class="text-textRegular desktop-m:text-headingRegular text-grey-0 opacity-50">
              Наш офис в Spaces 22 Arroba. Пожалуйста,<br> свяжитесь с нами, и наш менеджер вас встретит
            </div>
            <a href="https://maps.app.goo.gl/BJLzusMi8o21takF7" target="_blank" rel="noreferrer">
              <div class="text-SubtitleBold text-grey-0">
                C. de Pallars, 193, Sant Martí, 08005 Barcelona
              </div>
            </a>
          </div>
          <div class="flex flex-col gap-8">
            <div class="text-textRegular desktop-m:text-headingRegular text-grey-0 opacity-50">
              Часы работы
            </div>
            <div class="text-SubtitleBold text-grey-0">
              <p>Пн-пт 9:00 - 19:00</p>
              <p>Сб-вс выходной</p>
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex flex-row gap-24 desktop-m:gap-40 items-center justify-between w-full desktop-m:w-auto mt-24 desktop-m:mt-0">
        <div class="flex gap-16 items-center">
          <a href="/privacy-policy.pdf" class="text-headingRegular text-grey-0 opacity-50">Privacy Policy</a>
          <div class="bg-grey-0 opacity-30 h-24 w-[1px]"/>
          <a href="/terms.pdf" class="text-headingRegular text-grey-0 opacity-50">Terms of Use</a>
        </div>
        <div class="flex gap-24">
          <a href="https://www.instagram.com/gosnami.es/" target="_blank" rel="noreferrer">
            <img class="w-40 h-40" src="/images/social_instagram.png" alt=""/>
          </a>
          <a href="https://www.facebook.com/gosnami.es" target="_blank" rel="noreferrer">
            <img class="w-40 h-40" src="/images/social_facebook.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>