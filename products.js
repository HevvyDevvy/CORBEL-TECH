const PRODUCTS = [
  {
    id: "quick-deploy",
    tab: "Quick Deploy Servers",
    kind: "Server package",
    description:
      "Thirteen real, deployable server products in one package — Jenkins, GitLab, Oracle DB, a local MySQL/Postgres bundle, a single-node Kubernetes cluster, a hardened Postfix mail server, hardened Vagrant templates, cloud database Terraform for GCP/Azure/AWS, and more. Eight of them run immediately on download — real generated credentials included, no editing required.",
    preview: `$ cd QuickDeployServers/jenkins
$ docker compose up --build
# no setup wizard, admin user already configured

$ cd ../gitlab
$ docker compose up -d
# signup disabled, root password pre-set

$ cd ../k3s-local
$ docker compose up -d
$ export KUBECONFIG=$(pwd)/kubeconfig/kubeconfig.yaml
$ kubectl get nodes`,
    file: "QuickDeployServers.zip",
  },
  {
    id: "hardening",
    tab: "Shell Hardening Audit",
    kind: "Security tool",
    icon: "icons/shell-audit-icon.png",
    description:
      "A CLI audit tool for exactly the moment right after a quick deploy, before hardening is finished — the window an attacker is most likely to use. Checks session/history settings, startup-file tampering, authorized_keys, sudoers NOPASSWD entries, SUID/SGID binaries, world-writable files, sshd config, listening ports, and login history.",
    preview: `$ sudo dpkg -i shell-audit_1.1.0-1.deb
$ shell-audit

[+] Shell & Terminal Hardening Audit
--- Session & history settings ---
TMOUT (idle auto-logout)       : not set
--- authorized_keys audit ---
/home/user/.ssh/authorized_keys : 1 key(s)
--- sudoers: NOPASSWD entries ---
None found`,
    file: "shell-audit_1.1.0-1.deb",
    secondaryFile: "shell-audit-source.zip",
    secondaryLabel: "Download source",
  },
  {
    id: "redteamcomms",
    tab: "Secure Comms Protocol",
    kind: "Transmission protocol",
    description:
      "Authenticated encrypted point-to-point messaging over raw TCP: AES-256-GCM payload encryption, X25519 ephemeral key exchange, Ed25519 long-term identities so the exchange itself can't be silently MITM'd.",
    preview: `$ python cli.py init-identity
$ python cli.py fingerprint
# verify this fingerprint with your peer out-of-band first

$ python cli.py trust-peer alice <their-fingerprint>
$ python cli.py send --host 1.2.3.4 --port 5005 \\
    --peer alice --message "hi"`,
    file: "RedTeamComms.zip",
  },
  {
    id: "cloud",
    tab: "Cloud",
    kind: "Command bundle",
    description: "AWS, Azure, Oracle, Proxmox, Vagrant, VirtualBox, VMware — CLI references for provisioning and managing infrastructure across providers.",
    preview: `$ aws configure
$ aws ec2 describe-instances

$ az login
$ az vm list --output table

$ vagrant up
$ vagrant ssh`,
    file: "Cloud-Command-Bundle.zip",
  },
  {
    id: "quantum",
    tab: "Quantum",
    kind: "Command bundle",
    description: "Braket, Cirq, D-Wave, Q#/QDK, Qiskit, t|ket>, Xanadu, Quantum Inspire — CLI references across every major quantum SDK/provider.",
    preview: `$ pip install qiskit
$ qiskit-ibm-runtime --help

$ pip install cirq
$ python -c "import cirq; print(cirq.google.Sycamore)"`,
    file: "Quantum-Command-Bundle.zip",
  },
  {
    id: "info-transition",
    tab: "Information Transition",
    kind: "Command bundle",
    description: "JSON tooling, SQL, a fixed GPT-to-Google-Drive automation script, and Burp Suite reference material — moving and transforming data safely.",
    preview: `$ jq '.results[] | select(.status=="active")' data.json

$ psql -U user -d mydb -c "SELECT * FROM logs LIMIT 10;"

$ python gpt2gd.py`,
    file: "Information-Transition-Command-Bundle.zip",
  },
  {
    id: "local-cli",
    tab: "Local CLI",
    kind: "Command bundle",
    description: "AIX, Command Prompt, Cygwin, iTerm2, Kali, Linux, macOS, MSYS2, Parrot, PowerShell, RedHat, Ubuntu, WSL, Wine, plus Cargo/Java/Node.js/Python/R — every terminal and language runtime environment in one place.",
    preview: `$ wsl --install
$ powershell -Command "Get-Process"
$ cargo build --release
$ python3 -m venv venv && source venv/bin/activate`,
    file: "Local-CLI-Command-Bundle.zip",
  },
  {
    id: "networking",
    tab: "Networking",
    kind: "Command bundle",
    description: "General networking commands plus vendor-specific terminal references: Cisco IOS, Juniper JunOS, Aruba ArubaOS, Palo Alto PAN-OS.",
    preview: `Router# configure terminal
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0

admin@PA-VM> configure
admin@PA-VM# set rulebase security rules ALLOW-WEB action allow`,
    file: "Networking-Command-Bundle.zip",
  },
  {
    id: "static-server",
    tab: "Static Server",
    kind: "Command bundle",
    description: "nginx command reference — process management, config testing, reloads.",
    preview: `$ sudo nginx -t
$ sudo systemctl reload nginx
$ sudo nginx -s reload`,
    file: "Static-Server-Command-Bundle.zip",
  },
  {
    id: "integrated-service",
    tab: "Integrated Service",
    kind: "Command bundle",
    description: "Docker, Kubernetes, Terraform, Jenkins, Travis CI, Git/GitLab — the tools that tie a deployment pipeline together.",
    preview: `$ docker compose up -d
$ kubectl apply -f deployment.yaml
$ terraform plan && terraform apply
$ git push origin main`,
    file: "Integrated-Service-Command-Bundle.zip",
  },
  {
    id: "defensive-tech",
    tab: "Defensive Tech",
    kind: "Command bundle",
    description: "Suricata, Snort, Zeek, Wazuh, FortiGate, Microsoft Sentinel, pfSense, CrowdStrike Falcon, Splunk — blue-team detection and response tooling.",
    preview: `$ sudo suricata-update
$ tail -f /var/log/suricata/eve.json | jq .

index=security sourcetype=linux_secure "Failed password"
| stats count by user, src_ip`,
    file: "Defensive-Tech-Command-Bundle.zip",
  },
];
