/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ProfilePicture from "./images/profile.jpg";

function MainAboutMe() {
  return (
    <section class="profile basicStyle position-now">
      <h2 class="profile__title" id="goAbout">
        About me
      </h2>
      <ul class="profileList">
        <li class="profileList__img">
          <img
            src={ProfilePicture}
            alt="ばーんの写真"
            class="profileList__img--current"
          />
        </li>
        <li class="profileList__aboutMe">
          <p class="profileList__aboutMe__name">名前：ばーん</p>
          <div class="profileText">
            大阪出身。既婚者。現在転職に向けてプログラミング学習中(2019.10〜)。副業も視野に活動中。
            <br />
            HTML,CSS,JSを学習。今後はデザインとJSの学習を進めWebサイト制作に取り組んでいこうと考えています。
            <p class="addProfile">
              現在は実務経験を積んで成長していくことを最優先に考えています。簡単なお仕事でもご連絡頂ければ幸いです。
              <br />
              <span>
                <a
                  href="https://twitter.com/baan_nasebanaru"
                  class="contactTwitter"
                >
                  ※ご連絡はTwitterからお願いします
                </a>
              </span>
            </p>
          </div>
        </li>
        <li class="profileList__workExperience">
          <p class="profileList__workExperience__index  position-now">経歴</p>
          <div class="profileText">
            新卒でパチンコ店大手に就職。管理職6年経験。組合員数500人を超える組合長を経験。運営に3年間携わり視座を体得。
            <br />
            特に対人の洞察力が優れており、安定した組織運営で評価を獲得。
            <br />
            <p class="addProfile">
              ・数値分析と人材育成により、商品廃棄率0％の達成。また、前年比売上120％達成(10ヶ月間)
              <br />
              ・新店舗の立ち上げ経験。初年度目標客数150％の達成
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default MainAboutMe;
