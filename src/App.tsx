import Link from "./components/link";
import Hr from "./components/hr";
import IndexList from "./components/indexList";
import ScrollButton from "./components/scrollButton";
import Part from "./components/part";
import Section from "./components/section";
import Img from "./components/img";
import SkillsList from "./components/skillsList";

function App() {
    return (
        <>
            <div className="m-8">
                <h1 className="text-4xl font-bold my-6">portfolio</h1>
                <span className="text-gray-400">更新日:2023/10/13</span>
                <p className="leading-relaxed my-3 ml-4">
                    <Link href="https://github.com/kikuchi-masahide">
                        kikuchi-masahide
                    </Link>
                    の各リポジトリの概要説明です。
                </p>
                <Hr />
                <IndexList items={["competitive", "HappyShooting"]} />
                <Hr />
                <Part
                    title="competitive"
                    href="https://github.com/kikuchi-masahide/competitive"
                >
                    <Section title="概要">
                        競技プログラミングで用いるコードなどをまとめたリポジトリです。特に、libsディレクトリに各アルゴリズムの実装コードが含まれています。
                    </Section>
                    <Section title="主な更新期間">2019 年、2020 年</Section>
                    <Section title="AtCoderの参加実績について">
                        <p>
                            <Link href="https://atcoder.jp/users/ano3">
                                AtCoderマイページ
                            </Link>
                            です。2019 年、2020
                            年にコンテストに参加いたしました。使用言語は
                            C++です。最高レートは 1826(2020/7/25)です。
                        </p>
                        <p>
                            現在有効期間外ではありますが、2020 年 5
                            月に実施された第 3 回アルゴリズム実技検定(PAST)にて
                            94 点/EXPERT ランクを獲得いたしました。
                        </p>
                        <Img src="image.png" alt="レーティング推移" />
                    </Section>
                </Part>
                <Hr />
                <Part
                    title="HappyShooting"
                    href="https://github.com/kikuchi-masahide/HappyShooting2.0"
                >
                    <Section title="概要">
                        <p>
                            DirectX12
                            やデザインパターンについて勉強した際、そのアウトプットとして作成いたしました。自作エンジンと
                            DirectX12 を用いた、シンプルな 2D
                            のシューティングゲームです。
                        </p>
                    </Section>
                    <Section title="配布">
                        <p>TODO:配布場所 here</p>
                    </Section>
                    <Section title="デモ動画">
                        <p>TODO:デモ動画 here</p>
                    </Section>
                    <Section title="主な更新期間">2020 年~2022 年</Section>
                    <Section title="関連技術・関連知識">
                        <SkillsList
                            items={[
                                "C++",
                                "DirectX12",
                                "Boost",
                                "デザインパターン",
                            ]}
                        />
                    </Section>
                    <Section title="工夫した点">
                        <p>
                            Unity
                            のエンティティ管理を参考にしながら、適切な機能分散と可読性維持を心がけて作成いたしました。
                        </p>
                        <p>
                            特に意識したのは、エンティティの振る舞いに関してできるだけハードな仕様にチャレンジすることです。画面全体の描画シェーダを切り替える、時間が巻き戻るような挙動をエンティティ全体にさせるなど、様々なコンポーネントを結びつけながらも分かりやすい設計を保つことを目指しました。
                        </p>
                    </Section>
                    <Section title="課題点">
                        <p>
                            分量想定を誤り、外部コードなどを用いず全てC++コードで実装した結果、デバッグ毎のコンパイル時間増加やファイル構造の肥大化などが発生しました。
                        </p>
                        <p>
                            また、DirectX12の仕様の理解不足により、描画処理の最適化や各エンティティの描画コンポーネントを扱う仕様設計に課題が多く残りました。その結果、描画内容自体は簡素なものですが、テスト配布の際ノートパソコンでの処理速度が60fpsに追いつかないなどの問題が生じました。パイプライン等リソースの切り替え処理の最適化と、そのためのコンポーネント処理設計の改善が必要と考えております。
                        </p>
                    </Section>
                </Part>
            </div>
            <ScrollButton />
        </>
    );
}

export default App;
