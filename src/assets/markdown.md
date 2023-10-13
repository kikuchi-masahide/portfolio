# portfolio

<span style="color:gray;">更新日:2023/10/13</span>

[kikuchi-masahide](https://github.com/kikuchi-masahide)の各リポジトリの概要説明です。

---

## 目次

<ul class="index">
<li><a href="#competitive">competitive</a></li>
<li><a href="#HappyShooting">HappyShooting</a></li>
</ul>

---

<h2 id="competitive">competitive</h2>

[link](https://github.com/kikuchi-masahide/competitive)

### 概要

競技プログラミングで用いるコードなどをまとめたリポジトリです。特に、`libs`ディレクトリに各アルゴリズムの実装コードが含まれています。

### 主な更新期間

2019 年、2020 年

### AtCoder の参加実績について

[AtCoder マイページ](https://atcoder.jp/users/ano3)です。2019 年、2020 年にコンテストに参加いたしました。使用言語は C++です。最高レートは 1826(2020/7/25)です。

現在有効期間外ではありますが、2020 年 5 月に実施された第 3 回アルゴリズム実技検定(PAST)にて 94 点/EXPERT ランクを獲得いたしました。

![Alt text](/image.png)

---

<h2 id="HappyShooting">HappyShooting</h2>

[link](https://github.com/kikuchi-masahide/HappyShooting2.0)

### 概要

DirectX12 やデザインパターンについて勉強した際、そのアウトプットとして作成いたしました。自作エンジンと DirectX12 を用いた、シンプルな 2D のシューティングゲームです。

### 配布

<span style="color:red;">TODO:配布場所 here</span>

### デモ動画

<span style="color:red;">TODO:デモ動画の作成</span>

### 主な更新期間

2020 年~2022 年

### 関連技術・関連知識

<ul class="skills">
<li>C++</li>
<li>DirectX12</li>
<li>Boost</li>
<li>デザインパターン</li>
</ul>

### 工夫した点

Unity のエンティティ管理を参考にしながら、適切な機能分散と可読性維持を心がけて作成いたしました。

特に意識したのは、エンティティの振る舞いに関してできるだけハードな仕様にチャレンジすることです。画面全体の描画シェーダを切り替える、時間が巻き戻るような挙動をエンティティ全体にさせるなど、様々なコンポーネントを結びつけながらも分かりやすい設計を保つことを目指しました。

### 課題点

分量想定を誤り、外部コードなどを用いず全て C++コードで実装した結果、デバッグ毎のコンパイル時間増加やファイル構造の肥大化などが発生しました。

また、DirectX12 の仕様の理解不足により、描画処理の最適化や各エンティティの描画コンポーネントを扱う仕様設計に課題が多く残りました。その結果、描画内容自体は簡素なものですが、テスト配布の際ノートパソコンでの処理速度が 60fps に追いつかないなどの問題が生じました。パイプライン等リソースの切り替え処理の最適化と、そのためのコンポーネント処理設計の改善が必要と考えております。
