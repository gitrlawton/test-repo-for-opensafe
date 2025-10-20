# Security Policy

## Supported Versions

We take security seriously and actively maintain the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### How to Report

If you discover a security vulnerability, please follow these steps:

1. **Do Not** open a public issue
2. Email us at security@portfolio-dashboard.example.com with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Best effort

### Safe Harbor

We support safe harbor for security researchers who:

- Make a good faith effort to avoid privacy violations, data destruction, and service interruption
- Only interact with accounts you own or with explicit permission
- Don't exploit a security issue beyond what's necessary to demonstrate it
- Keep confidential any information about discovered vulnerabilities

## Security Best Practices

When using Portfolio Dashboard:

1. **Keep Dependencies Updated**: Regularly run `npm audit` and update dependencies
2. **Environment Variables**: Never commit `.env` files containing secrets
3. **Access Control**: Use strong authentication mechanisms
4. **HTTPS Only**: Always use HTTPS in production
5. **Input Validation**: Validate all user inputs
6. **Regular Audits**: Conduct regular security audits

## Security Features

- JWT-based authentication
- Secure password hashing with bcrypt
- CSRF protection
- XSS prevention
- SQL injection prevention
- Rate limiting

## Contact

For any security concerns, contact: security@portfolio-dashboard.example.com

Thank you for helping keep Portfolio Dashboard secure!
