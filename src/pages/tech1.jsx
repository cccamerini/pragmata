import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Tech1() {
    const { t, i18n } = useTranslation();
  
    return (
    <>
         <h2>{t('tech1.title')}</h2>
         <h4>{t('by')}<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
         <h6>03/02/2023&nbsp;<span className='padright20'>~500 {t('words')}</span><img className='a1' src={require("../img/5min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>3min {t('rdtime')}</span></h6>
         <hr />
         <p>{t('tech1.p1')}</p>
         <p>{t('tech1.p2')}</p>
         <div className='code'>{t('tech1.cmd1')}</div>
         <p>{t('tech1.p3')}</p>
         <p>{t('tech1.p4')}</p>
         <div className='code'>{t('tech1.cmd2')}</div>
         <p>{t('tech1.p5')}</p>
         <p>{t('tech1.p6')}</p>
         <div className='code'># su -</div>
         <p>{t('tech1.p7')}</p>
         <p>{t('tech1.p8')}</p>
         <div className='code'># ufw app list</div>
         <p>{t('expresp')}:</p>
         <div className='code'>
            Available applications:
            <br />
            &nbsp;OpenSSH
        </div>
        <p>{t('tech1.p9')}</p>
        <div className='code'># ufw allow OpenSSH</div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Rules updated
          <br />
          Rules updated (v6)
        </div>
        <br />
        <div className='code'>
          # ufw enable
        </div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Command may disrupt existing ssh connections. Proceed with operation (y|n)? 
          <br />
          &nbsp;y
          <br />
          Firewall is active and enabled on system startup
        </div>
        <br />
        <div className='code'>
          # ufw status
        </div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Status: active
          <br />
          To                         Action      From
          <br />
          --                         ------      ----
          <br />
          OpenSSH                    ALLOW       Anywhere
          <br />
          OpenSSH (v6)               ALLOW       Anywhere (v6)
        </div>
        <p>{t('tech1.p10')}</p>
        <div className='code'>
          # apt update
        </div>
        <p>{t('tech1.p11')}</p>
        <div className='code'>
          # apt install nginx
        </div>
        <p>{t('tech1.p12')}</p>
        <div className='code'># ufw app list</div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Available applications:
          <br />
          &nbsp;Nginx Full
          <br />
          &nbsp;Nginx HTTP
          <br />
          &nbsp;Nginx HTTPS
          <br />
          &nbsp;OpenSSH
        </div>
        <p>{t('tech1.p13')}</p>
        <div className='code'># ufw allow 'Nginx Full'</div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Rule added
          <br />
          Rule added (v6)
        </div>
        <p>{t('tech1.p14')}</p>
        <div className='code'># ufw status</div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          Status: active
          <br />
          To                         Action      From
          <br />
          --                         ------      ----
          <br />
          OpenSSH                    ALLOW       Anywhere
          <br />
          Nginx Full                 ALLOW       Anywhere
          <br />
          OpenSSH (v6)               ALLOW       Anywhere (v6)
          <br />
          Nginx Full (v6)            ALLOW       Anywhere (v6)
        </div>
        <p>{t('tech1.p15')}</p>
        <div className='code'># systemctl status nginx</div>
        <p>{t('expresp')}:</p>
        <div className='code'>
          ● nginx.service - A high performance web server and a reverse proxy server
          <br />
          Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
          <br />
          Active: active (running) since Fri 2023-02-03 15:01:28 UTC; 9min ago
          <br />
          Docs: man:nginx(8)
          <br />
          Main PID: 6574 (nginx)
          <br />
          Tasks: 2 (limit: 1066)
          <br />
          Memory: 4.6M
          <br />
          CGroup: /system.slice/nginx.service
          <br />
          &nbsp;&nbsp;├─6574 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
          <br />
          &nbsp;&nbsp;└─6575 nginx: worker process
          <br />
          Feb 03 15:01:28 216.207.178.68.host.secureserver.net systemd[1]: Starting A high performance web server and a reverse p...
          <br />
          Feb 03 15:01:28 216.207.178.68.host.secureserver.net systemd[1]: Started A high performance web server and a reverse pr...
          <br />
          lines 1-13/13 (END)
        </div>

    </>
  )

}