### һ�� ����˵��
1. �ɽ����������� header �������� include �ļ��У�ͨ���﷨ `@@include('./include/head.html')` �������ļ�������
2. gulp ʵ��ʵʱˢ�£��ڱ���ʱ��������ļ���ˢ�������
3. ����ͼƬ�У����Ե�����ͼƬ����� `src/images/sprite` Ŀ¼�£������ѹ������`dis/images/`Ŀ¼�£��� ����css�ļ��Ѻϲ�����
common.min.css �ļ����У������ٴ�����
4. js ֧�ֲ��� ES6 �﷨��ͨ�� gulp-babel �Ȳ���ɽ� ES6 �﷨����� ES5 �﷨������������ dist Ŀ¼
5. css ֧�� less, scss, css ���ָ�ʽ���ļ� ����� `src/css` Ŀ¼�£��� `src/css/css` Ŀ¼��Ϊ������ �� less��scss ���ļ����˴�css�ļ��������ϼ����Ժ������� `dist/css` Ŀ¼������Ϊ `common.min.css`�������Լ������µ�css�ļ���ʱ�������ڴ����롣

### ����ע������
1. gulp �е��ļ����� ��Ҫ�����д������͵��ļ��������� css �ļ����У����޴����͵��ļ������޷����ӵģ�Ҳ����ɵ�һ������gulp����ʱ���ļ�δ���룬δ�������ͨ������ gulp ����ʽ���
2. �ļ�����ɾ��ʱ�������ļ�ʹ�� gulp-cache ��������������룬���� �������Բ�����Ŀ���ļ��С���ͨ������ gulp ����ʽ���
3. ɾ���ļ����࣬���ѱ����뵽 dist Ŀ¼ʱ����ͨ������ɾ�� dist Ŀ¼�������� gulp ������ʹ src �� dist ������ȫͬ��

### ����ʹ�÷�ʽ
1. ��װ [node.js](https://nodejs.org/en/)
2. ȫ�ְ�װ gulp: `npm install gulp -g` (�Ա����� cnpm: `npm install cnpm -g --registry=https://registry.npm.taobao.org`)
3. ���������� gulp -v�����ְ汾�ż�Ϊ��ȷ��װ
4. ���غ������ļ����ֱ����Ŀ¼��ִ�� `cnpm install` ���� ����װ��Ӧ��

### �ġ�npm ʹ��
1. ���ͨ�� `cnpm init` ���������� ��ʼ�� `package.json` �ļ�
2. `-dev`��������package.json �� `devDependencies` �ڵ㣬��ָ�� `-dev` �������� `dependencies` �ڵ�
3. `npm uninstall <name> [-g] [--save-dev]`  PS����Ҫֱ��ɾ�����ز����
4. ʹ��npm���²����`npm update <name> [-g] [--save-dev]`
5. ����ȫ�������`npm update [--save-dev]`
