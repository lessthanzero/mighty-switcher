import React from 'react';
import Link from 'gatsby-link';

import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className="has-background-white-ter">
    <ol>
      <li>
        <a>Общие правила</a>
      </li>
      <li>
        <a>Цветовые схемы</a>
      </li>
      <li>
        <a>Типографика</a>
      </li>
      <li>
        <a>Поля ввода</a>
      </li>
      <li className={styles.selected}>
        <a>Переключалка</a>
        <ol>
          <li>
            <a href="#usage">Использование</a>
          </li>
          <li>
            <a href="#design-system">Связь с дизайн-системой</a>
          </li>
          <li>
            <a href="#how-to">Как получить компонент?</a>
          </li>
          <li>
            <a href="#testing">Тестирование</a>
          </li>
        </ol>
      </li>
      <li>
        <a>Выпадайка</a>
      </li>
      <li>
        <a>Мультиселекто</a>
      </li>
    </ol>
</nav>
);

export default Sidebar;