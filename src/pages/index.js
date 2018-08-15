import React from 'react';
import Link from 'gatsby-link';
import Switcher from '../components/Switcher';

import correctUsage from './correct-usage.png'
import paddingsSample from './paddings-sample.png'
import moduleGrid from './module-grid.png'
import longDescription from './long-description.png'

const IndexPage = () => (
  <div className="content">
    
    <h1>Переключалка</h1>


    <div className="columns">
        <div className="column">

            <p>Это простой переключатель состояния, встречающийся в нашем веб-приложении. Отвечает на вопрос «Включено ли?» и подобные, предполагающие ответ «Да» или «Нет».</p>

        </div>
        <div className="column is-half">

            <Switcher labelText={"Show me what you've got!"} disabled={false} sizing={"standard"} theme={"default"}/>

        </div>
    </div>
    
    <h2>Использование</h2>

    <section id="usage">    

        <h3>Где пригодится?</h3>

        <p>В формах и настройках. Например: хотим подписать пользователя на рассылку.</p>

        <h3>Общие рекомендации</h3>

        <p>Если вы собираете форму, посоветуйтесь с продакт-оунером. Вам действительно нужен этот контрол?</p>
        <p>Придумайте и напишите понятный и короткий текст для подписи. В идеале, он должен отвечать на вопрос: «Что я сейчас включу (выключу)?»</p>

        <h3>Поведение</h3>

        <p>Обычно оказывается в двух состояниях: включено или выключено. Также, есть заблокированные состояния (включено или выключено, но пользователь не может его менять), получающиеся добавлением атрибута <i>disabled</i>.</p>
        <p>Начальное состояние можно менять с помощью опционального атрибута <i>active</i>.</p>

        <table>
            <thead>
                <tr>
                    <th>Представление в коде</th>
                    <th>Отображение</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code>&lt;Switcher disabled=&#123;false&#125; /&gt;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"default"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>&lt;Switcher disabled=&#123;true&#125; /&gt;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={true} sizing={"standard"} theme={"default"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>&lt;Switcher disabled=&#123;true&#125; active=&#123;true&#125; /&gt;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={true} active={true} sizing={"standard"} theme={"default"}/>
                    </td>
                </tr>
            </tbody>
        </table>

        <p>Строка с переключалкой и подписью занимает всю ширину колонки, отведенную под форму.</p>

        <p>Текстовый лейбл стоит перед переключалкой и занимает 1/3 ширины строки. </p>

        <p>При уменьшении ширины окна изменяется ширина блока с самим свитчером, ширина подписи остаётся неизменной до последнего.</p>
        
        <h3>Как правильно отрисовать?</h3>

        <p>Не забыть про отступы сверху и снизу. Если необходимо, добавить полоску-разделитель или пустую строку сразу после переключалки. Вертикальные отступы по-умолчанию 20 пикселей, горизонтальные — 24 пикселя.</p>

        <figure>
            <img src={paddingsSample} alt="Разметка отступов" />
            <figcaption>Переключатель с размеченными отступами при ширине контейнера 640 пикселей</figcaption>
        </figure>

        <p>Выбрать правильный размер или цветовую схему.</p>
        
        <p>Текст подписи выравнивается по левому краю. Кегль (размер) 14 пикселей, высота строки — 20 пикселей.</p>

        <figure>
            <img src={correctUsage} alt="Пример правильного использования" />
            <figcaption>Переключатель в форме редактирования объявления; стандартная цветовая схема</figcaption>
        </figure>
        
        <h3>А как не стоит?</h3>

        <p>Подумайте, можно ли в интерфейсе обойтись без переключалки?</p>

        <p>Не рекомендуется рисовать переключатель перед сопроводительным текстом, а также, сверху или снизу от текстового лейбла — на десктопе.</p>

        <p>Не рекомендуется использовать длинные подписи переключателя: попробуйте уложиться в одну строку.</p>

        <p>Не рекомендуется использовать больше четырех переключателей подряд.</p>
        
        <figure>
            <img src={longDescription} alt="Пример неправильного использования со слишком длинным описанием" />
            <figcaption>Пример неправильного использования со слишком длинным описанием</figcaption>
        </figure>

    </section>

    <h2>Связь с дизайн-системой</h2>
    <section id="design-system">
    
        <p>Все размеры кратны четырехпиксельному микро-модулю.</p>

        <figure>
            <img src={moduleGrid} alt="Пример компонента с наложенной модульной сеткой" />
            <figcaption>Пример компонента с наложенной модульной сеткой</figcaption>
        </figure>
    
        <p>Размер переключателя настраивается:</p>
    
        <table>
            <thead>
                <tr>
                    <th>Размер</th>
                    <th>Значение атрибута</th>
                    <th>Отображение</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Стандартный</td>
                    <td>
                        <code>sizing=&#123;'standard'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} sizing={"standard"} theme={"default"}/>
                    </td>
                </tr>
                <tr>
                    <td>Малый</td>
                    <td>
                        <code>sizing=&#123;'small'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} sizing={"small"} theme={"default"}/>
                    </td>
                </tr>
                <tr>
                    <td>Большой</td>
                    <td>
                        <code>sizing=&#123;'large'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} sizing={"large"} theme={"default"}/>
                    </td>
                </tr>
            </tbody>
        </table>
    
        <p>
            Могут использоваться разные цветовые темы для настройки внешнего вида:
        </p>
    
        <table>
            <thead>
                <tr>
                    <th>Тема</th>
                    <th>Значение атрибута</th>
                    <th>Отображение</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Стандартная</td>
                    <td>
                        <code>theme=&#123;'default'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"default"}/>
                    </td>
                </tr>
                <tr>
                    <td>Услуги</td>
                    <td>
                        <code>theme=&#123;'services'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"services"}/>
                    </td>
                </tr>
                <tr>
                    <td>Недвижимость</td>
                    <td>
                        <code>theme=&#123;'real-estate'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"real-estate"}/>
                    </td>
                </tr>
                <tr>
                    <td>Авто</td>
                    <td>
                        <code>theme=&#123;'auto'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"auto"}/>
                    </td>
                </tr>
                <tr>
                    <td>Работа</td>
                    <td>
                        <code>theme=&#123;'jobs'&#125;</code>
                    </td>
                    <td>
                        <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"jobs"}/>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <h2>Как получить компонент?</h2>
    <section id="how-to">
    
        <ol>
            <li>
                <a href="https://github.com/lessthanzero/mighty-switcher/blob/master/switcher.sketch" title="Скачать компонент в формате Скетча">Скачать</a> интерфейсный набор из облака;
            </li>
            <li>
                <a href="https://github.com/lessthanzero/mighty-switcher" title="Репозиторий проекта">Клонировать проект</a> или посмотреть в исходный код;
            </li>
        </ol>
    
        <h3>Как запустить проект у себя?</h3>
    
        <p>Этот проект использует «<a href="https://www.gatsbyjs.org">Гэтсби</a>» для скаффолдинга и решения инфраструктурных вопросов. Вам пригодится Yarn,  Gatsby-CLI и базовое умение пользоваться терминалом.</p>
    
        <p><b>Поехали:</b></p>
    
        <p>Для начала запустим <i>Terminal.app</i></p>
    
        <ol>
            <li>
                Проверим, установлен ли Node.js: <code>node -v</code>
            </li>
            <li>
                Скачаем и установим его, если на предыдущем шаге получили ошибку: <a href="https://nodejs.org">https://nodejs.org</a>. Не стесняйтесь позвать админа! 😉
            </li>
            <li>
                Установим «Гэтсби»: <code>npm install --global gatsby-cli</code>
            </li>
            <li>
                Установим Yarn любым описанным здесь способом: <a href="https://yarnpkg.com/en/docs/install#mac-stable">https://yarnpkg.com/en/docs/install#mac-stable</a>
            </li>
            <li>
                Клонируем проект: <code>cd [папка, где вы собираетесь хранить проект]; git clone https://github.com/lessthanzero/mighty-switcher.git; cd mighty-switcher</code>
            </li>
            <li>
                Команда <code>yarn develop</code> показывает этот гид по адресу <a href="http://localhost:8000">http://localhost:8000</a>
            </li>
            <li>
                Команда <code>yarn storybook</code> показывает интерактивный полигон с разными состояниями компонента вот тут: <a href="http://localhost:9001">http://localhost:9001</a>
            </li>
    
        </ol>
    </section>

    <h2>Тестирование</h2>

    <p>Тестировщики могут использовать <a href="http://localhost:9001">Storybook</a> (<i>работает локально</i>) и полученные знания о состояниях, сетке и микро-модуле, чтобы проверить правильность верстки и работу компонента. В будущем в эту секцию добавится информация о тестировании компонента и его локализации (направление чтения справа-налево и т.п.).</p>

  </div>


);

export default IndexPage;
