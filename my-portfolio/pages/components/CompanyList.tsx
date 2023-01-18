import React from 'react';
import { companyData } from './companyData';
import list from '@/styles/List.module.css'

const CompanyList: React.FC = () => {
    return (
      <ul className={`${list.grid} list-none`}>
        {companyData.map((company, index) => (
          <li key={company.id} className={`${list.company} company${index+1} card`}>
            <a href={company.websiteUrl} target="_blank">
                <p>{company.name}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
export default CompanyList;