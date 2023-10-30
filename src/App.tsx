import Link from "./components/link";
import Hr from "./components/hr";
import IndexList from "./components/indexList";
import ScrollButton from "./components/scrollButton";
import Part from "./components/part";
import Section from "./components/section";
import Img from "./components/img";
import SkillsList from "./components/skillsList";
import img_png from "./assets/image.png";
import video_mp4 from "./assets/video.mp4";

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
                <IndexList
                    items={[
                        "competitive",
                        "HappyShooting",
                        "myeditor",
                        "simple-todo",
                        "portfolio",
                    ]}
                />
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
                        <Img src={img_png} alt="レーティング推移" />
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
                    {/* <Section title="配布">
                        <p>TODO:配布場所 here</p>
                    </Section>
                    <Section title="デモ動画">
                        <p>TODO:デモ動画 here</p>
                    </Section> */}
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
                <Hr />
                <Part
                    title="myeditor"
                    href="https://github.com/kikuchi-masahide/myeditor"
                >
                    <Section title="概要">
                        <p>
                            LaravelとVue.jsを初めて学習した際、アウトプットとして作成いたしました。シンプルなテキストエディタです。作成途中で業務開始レベルに相当すると判断されたため細かい点が未実装・未修正のままですが、根本的な機能については完成しております。
                        </p>
                    </Section>
                    <Section title="主な更新期間">2022年12月</Section>
                    <Section title="関連技術・関連知識">
                        <SkillsList
                            items={[
                                "PHP",
                                "Laravel",
                                "JavaScript/TypeScript",
                                "Vue.js",
                                "Docker",
                                "MySql",
                                "Bootstrap",
                            ]}
                        />
                    </Section>
                    <Section title="工夫した点">
                        <p>
                            ログインするデバイスを1つに限定する、Cookieとサーバの両方の保存方式を活用するなど、データの競合を防ぐための工夫を行いました。
                            <br />
                            また、タグ付けに関する多対多の関係のデータベース化など、データベースの設計についてもアドバイスを頂きながら勉強できました。
                        </p>
                    </Section>
                </Part>
                <Hr />
                <Part
                    title="simple-todo"
                    href="https://github.com/kikuchi-masahide/simple-todo"
                >
                    <Section title="概要">
                        <p>
                            アルバイトにてFlatterの知識が必要となったため、勉強のために作成したアプリです。ユーザアカウントごとにデータをクラウド同期できる、シンプルなTODOアプリです。
                        </p>
                    </Section>
                    <Section title="デモ動画">
                        <Img src={video_mp4} alt="simple-todoのデモ動画" />
                    </Section>
                    <Section title="主な更新期間">2023 年5 月</Section>
                    <Section title="関連技術・関連知識">
                        <SkillsList
                            items={[
                                "Flatter",
                                "Dart",
                                "PHP",
                                "Laravel",
                                "Docker",
                            ]}
                        />
                    </Section>
                    <Section title="工夫した点">
                        <p>
                            TODOアプリの機能として工夫した点は、タスク同士に親/子の関係を定義できるようにしたことです。それに関し、分かりやすい表示やバグを埋め込まない(親子関係のループの作成を防ぐ、など)ことを心がけました。
                            <br />
                            プログラミング面では、MVVMパターンを初めて用いたことが挑戦でした。また、Undo/Redoのためにコマンドパターンを導入する、データの保存先としてLaravelサーバとローカルファイルを簡単に切り替えられるようリポジトリパターンを導入する、なども行いました。
                        </p>
                    </Section>
                </Part>
                <Hr />
                <Part
                    title="portfolio"
                    href="https://github.com/kikuchi-masahide/portfolio"
                >
                    <Section title="概要">
                        <p>このページです。Reactを用いて作成いたしました。</p>
                    </Section>
                    <Section title="主な更新期間">2023 年10 月</Section>
                    <Section title="関連技術・関連知識">
                        <SkillsList
                            items={[
                                "React",
                                "TypeScript",
                                "Tailwind CSS",
                                "Vite",
                            ]}
                        />
                    </Section>
                    <Section title="工夫した点">
                        <p>
                            Github
                            Pagesを用いる上での制約のための、Viteの細かい設定に一番苦労しました。ドキュメントとGithub
                            Copilotの力を借り、最終的にはGithub
                            actionsによる自動デプロイを実現いたしました。
                        </p>
                    </Section>
                </Part>
            </div>
            <ScrollButton />
        </>
    );
}

export default App;
