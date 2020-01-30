import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';

import { Container, SkillsList, Skill } from './styles';

export default function SkillsBar() {
  const [percent90, setPercent90] = useState(0);
  const [percent85, setPercent85] = useState(0);
  const [percent75, setPercent75] = useState(0);
  const [percent70, setPercent70] = useState(0);
  const [percent60, setPercent60] = useState(0);

  const increase = newPercent => {
    setPercent85(newPercent < 85 ? newPercent : percent85);
    setPercent75(newPercent < 75 ? newPercent : percent75);
    setPercent70(newPercent < 70 ? newPercent : percent70);
    setPercent60(newPercent < 60 ? newPercent : percent60);
    setPercent90(newPercent);
  };

  const handleIncrease = () => {
    const newPercent = percent90 + 1;

    if (newPercent >= 90) {
      return;
    }

    setTimeout(increase, 20, newPercent);
  };

  useEffect(() => {
    handleIncrease();
  }, [percent90]); //eslint-disable-line

  return (
    <Container>
      <h2>SKILLS</h2>
      <SkillsList>
        <Skill>
          <div>
            <FaHtml5 className="skillName" size={25} color="#E44D26" />
            <span>{percent90 + 1}%</span>
          </div>
          <Line percent={percent90} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaCss3 className="skillName css" size={25} color="#264de4" />
            <span>{percent85 + 1}%</span>
          </div>
          <Line percent={percent85} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaJsSquare className="skillName js" size={25} color="#F0DB4F" />
            <span>{percent75 + 1}%</span>
          </div>
          <Line percent={percent75} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaGitAlt className="skillName react" size={25} color="#F1502F" />
            <span>{percent70 + 1}%</span>
          </div>
          <Line percent={percent70} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaReact className="skillName react" size={25} color="#61dbfb" />
            <span>{percent70 + 1}%</span>
          </div>
          <Line percent={percent70} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaReact className="skillName react" size={25} color="#3765AF" />
            <span>{percent60 + 1}%</span>
          </div>
          <Line percent={percent60} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
        <Skill>
          <div>
            <FaNodeJs className="skillName react" size={25} color="#75B242" />
            <span>{percent60 + 1}%</span>
          </div>
          <Line percent={percent60} strokeWidth="1" strokeColor="#00e868" />
        </Skill>
      </SkillsList>
    </Container>
  );
}
