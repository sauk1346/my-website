import Table from '@/components/features/codevault/CodeTable';
import { sectionsOrder } from '@/data/codevault/codeVaultData';
import styles from './CodeVault.module.css';

const CodeVault = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>CodeVault</h1>

        <div className={styles.grid}>
          {sectionsOrder.map((section, index) => (
            <Table
              key={index}
              title={section.title}
              headers={section.headers}
              data={section.data}
              variant="algorithms"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodeVault;