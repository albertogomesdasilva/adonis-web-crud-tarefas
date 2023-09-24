    1  mysql -u root -p
    2  mysql -v
    3  mysql -u alber -p
    4  mysql -u root -p
    5  mysql -v
    6  mysql -u alber -p
    7  mysql -u root -p
    8  mysql -v
    9  mysqld_safe --skip-grant-tables --skip-networking &
   10  mysql -u root
   11  /etc/init.d/mysql restart
   12  mysql -u root -p
   13  mysql -v
   14  mysql -u root -p
   15  sudo systemctl restart mysql
   16  mysql -u root -p
   17  sudo netstat -tuln | grep 3306
   18  sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
   19  sudo systemctl restart mysql
   20  sudo firewall-cmd --list-all
   21  sudo firewall-cmd --list-ports
   22  sudo apt-get install ufw
   23  sudo ufw status
   24  sudo ufw allow 80/tcp
   25  sudo ufw allow 443/tcp
   26  sudo ufw allow 3333/tcp
   27  sudo ufw allow 8080/tcp
   28  sudo ufw allow 8000/tcp
   29  sudo ufw allow 8081/tcp
   30  sudo ufw allow 3000/tcp
   31  sudo ufw allow 3001/tcp
   32  sudo ufw allow 5000/tcp
   33  sudo ufw allow 3306/tcp
   34  sudo ufw enable
   35  sudo ufw status
   36  sudo firewall-cmd --list-all
   37  mysql -u root -p
   38  sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
   39  sudo ufw allow 3306/tcp
   40  sudo systemctl restart mysql
   41  sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
   42  sudo systemctl restart mysql
   43  mysql -u root -p
   44  mysql restart;
   45  sudo systemctl restart mysql
   46  git clone
   47  exit
   48  pm2 status
   49  apt install pm2 -g
   50  apt install pm2 
   51  pm2 sttus
   52  pm2 status
   53  apt install pm2
   54  sudo npm install -g pm2
   55  sudo apt update
   56  sudo apt install nodejs npm
   57  node -v
   58  sudo npm install -g pm2
   59  node -v
   60  apt install pm2
   61  pm2 -v
   62  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   63  source ~/.bashrc
   64  nvm install 15
   65  nvm install 16
   66  nvm use 16
   67  node -v
   68  nvm alias default 16
   69  node -v
   70  GIT
   71  gitclone
   72  git
   73  git push
   74  git -v
   75  git --version
   76  pm2
   77  git clone https://albertogomesdasilva/despesas
   78  git clone https://github.com/albertogomesdasilva/despesas
   79  ls
   80  cd despesas
   81  ls
   82  npm install
   83  npm run dev
   84  node ace migration:run
   85  node ace db:seed
   86  nrd
   87  npm run dev
   88  cd ..
   89  rm -rf despesas
   90  git clone https://github.com/albertogomesdasilva/despesas
   91  cd despesas
   92  npm install
   93  node ace migration:fresh
   94  node ace db:seed
   95  npm run dev
   96  node ace migration:fresh
   97  node ace db:seed
   98  npm run dev
   99  git history > LEIAME.txt
  100  pm2 'npm run dev' --name despesas
  101  pm2 examples
  102  pm2 start "npm run dev" --name despesas-api
  103  pm2 startup
  104  pm2 save
  105  pm2 status
  106  ls
  107  cd despesas
  108  ls
  109  pm2 status
  110  ls
  111  pm2 status
  112  pms                                                                                                                                                                                                                                                          
  113  pm2 status
  114  mysql -u root -p
  115  mysql status
  116  service mysql status
  117  mysql -u root -p
  118  service mysql restart
  119  pm2 status
  120  mysql -u root -p
  121  ls
  122  cd despesas/
  123  ls
  124  node ace db:seed
  125  mysql -u root -p
  126  node ace db:seed
  127  node ace db:run
  128  node ace migration:run
  129  node ace db:seed
  130  npm status
  131  pm2 status
  132  mysql -u root -p
  133  reboot
  134  ls
  135  sudo ufw status
  136  sudo ufw allow 22/tcp
  137  sudo ufw status
  138  clear
  139  mysql -u root -p
  140  ls
  141  cd despesas
  142  node ace migration:run
  143  node ace db:seed
  144  ls
  145  git clone https://github.com/albertogomesdasilva/adonis-web-crud-tarefas
  146  ls
  147  cd adonis-web-crud-tarefas/
  148  npm i
  149  mysql -u root -p
  150  npm i
  151  node ace migration:run
  152  npm install @adonisjs/lucid
  153  node ace configure @adonisjs/lucid
  154  node ace migration:run
  155  node ace configure @adonisjs/lucid
  156  node ace migration:run
  157  npm run dev
  158  npm run build
  159  cd build
  160  npm ci --production
  161  node server.js
  162  cd ..
  163  npm run dev
  164  pm2 'npm run dev'
  165  npm start
  166  clear
  167  pm2 status
  168  pm2 -h
  169  pm2 examples
  170  ls
  171  pm2 start --name "meu-app" npm -- run dev
  172  pm2 meu-app storp
  173  pm2 meu-app stop
  174  pm2  stop meu-app
  175  npm run dev
  176  npm run build
  177  cd build
  178  npm start
  179  node start
  180  npm ci --production
  181  l
  182  clear
  183  ls
  184  node server
  185  node server.js
  186  npm run dev
  187  cd ..
  188  npm run dev
  189  pm2 start --name "meu-app" npm -- run dev
  190  pm2 examples
  191  pm2 delete meu-app
  192  pm2 start --name "tarefas" npm run dev
  193  pm2 start --name "tarefas" npm -- run dev
  194  pm2 delete tarefas 3
  195  pm2 status
  196  npm run dev
  197  npm run build
  198  cd build
  199  npm ci --production
  200  node server.js
  201  node server
  202  node start
  203  npm run dev
  204  cd..
  205  cd ..
  206  npm run dev
  207  cd build
  208  ls
  209  pm2 server.js
  210  pm2 node server.js
  211  node server.js
  212  node server
  213  ls
  214  cd adonis-web-crud-tarefas/
  215  npm run build
  216  cd build
  217  npm ci --production
  218  node server.js
  219  cd ..
  220  npm run build
  221  cd build/
  222  npm ci --production
  223  node server.js
  224  ls
  225  cd adonis-web-crud-tarefas/
  226  ls
  227  rm -rf build/
  228  node ace build --production
  229  cd build
  230  node server.js
  231  cd ..
  232  node ace build --production
  233  cd build/
  234  npm ci --production
  235  node server.js
  236  cd ..
  237  npm i typescript
  238  node ace build --production
  239  cd build
  240  node server.js
  241  cd ..
  242  pm2 status
  243  npm run dev
  244  pm2 'npm run dev' start
  245  pm2 start --name "tarefas" npm -- run dev
  246  pm2 save
  247  ls
  248  cd adonis-web-crud-tarefas/
  249  cd build/
  250  node server.js
  251  pm2 status
  252  pm2 delete tarefas 5
  253  pm2 status
  254  pm2 start --name "tarefas" node server.js
  255  pm2 delete tarefas 6
  256  pm2 status
  257  pm2 restart
  258  pm2 stop
  259  pm2 status
  260  pm2 start --name "tarefas-adonis" node server.js
  261  pm2 delete tarefas 
  262  pm2 delete tarefas-adonis 8
  263  pm2 status
  264  node server.js
  265  pm2 start --name "adonis-tarefas" node server.js
  266  pm2 status
  267  pm2 stop 11
  268  pm2 delete 11
  269  pm2 save
  270  pm2 delete 10
  271  ls
  272  cd adonis-web-crud-tarefas/
  273  cd build/
  274  pm2 start --name "tarefas" node server.js
  275  pm2 save
  276  history > LEIAME.md
